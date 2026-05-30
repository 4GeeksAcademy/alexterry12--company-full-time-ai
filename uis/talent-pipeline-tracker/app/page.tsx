
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const STATUS_LABELS: Record<string, string> = {
  received: "Received",
  in_progress: "In progress",
  selected: "Selected",
  discarded: "Discarded",
};

const STAGE_LABELS: Record<string, string> = {
  pending: "Pending review",
  review: "Under review",
  personal_interview: "Personal interview",
  technical_interview: "Technical interview",
  offer_presented: "Offer presented",
};

type Candidate = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  linkedin_url: string;
  cv_url: string;
  experience_years: number;
  status: string;
  stage: string;
};

type CandidateFormData = {
  full_name: string;
  email: string;
  phone: string;
  position: string;
  linkedin_url: string;
  cv_url: string;
  experience_years: string;
  status: string;
  stage: string;
};

const INITIAL_FORM_DATA: CandidateFormData = {
  full_name: "",
  email: "",
  phone: "",
  position: "",
  linkedin_url: "",
  cv_url: "",
  experience_years: "0",
  status: "received",
  stage: "pending",
};

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [formData, setFormData] = useState<CandidateFormData>(INITIAL_FORM_DATA);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const statusFilter = searchParams.get("status") || "all";
  const stageFilter = searchParams.get("stage") || "all";

  useEffect(() => {
  fetch(process.env.NEXT_PUBLIC_API_URL + "/records")
    .then((res) => res.json())
    .then((data) => {
      setCandidates(data.data);
      setLoading(false);
    })
    .catch(() => {
      setError("Could not load candidates");
      setLoading(false);
    });
}, []);

  const updateFormField = (field: keyof CandidateFormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const fullName = formData.full_name.trim();
    const email = formData.email.trim();
    const position = formData.position.trim();
    const years = Number(formData.experience_years);

    if (!fullName || !email || !position) {
      return "Full name, email, and position are required";
    }

    if (Number.isNaN(years) || years < 0) {
      return "Experience years must be a non-negative number";
    }

    return "";
  };

  const handleRegisterCandidate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setFormSuccess("");
      setFormError(validationError);
      return;
    }

    setFormSuccess("");
    setFormError("");
    setIsSubmittingForm(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          full_name: formData.full_name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          position: formData.position.trim(),
          linkedin_url: formData.linkedin_url.trim(),
          cv_url: formData.cv_url.trim(),
          experience_years: Number(formData.experience_years),
        }),
      });

      if (!response.ok) {
        throw new Error("Could not register candidate");
      }

      const createdCandidateData = await response.json();
      const createdCandidate: Candidate =
        createdCandidateData.data ?? createdCandidateData;

      setCandidates((prevCandidates) => [createdCandidate, ...prevCandidates]);
      setFormData(INITIAL_FORM_DATA);
      setFormSuccess("Updated successfully");
    } catch {
      setFormError("Could not register candidate");
    } finally {
      setIsSubmittingForm(false);
    }
  };

  const updateFilterParam = (key: "status" | "stage", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.replace(query ? `?${query}` : "?");
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      !query ||
      candidate.full_name.toLowerCase().includes(query) ||
      candidate.email.toLowerCase().includes(query);
    const matchesStatus =
      statusFilter === "all" || candidate.status === statusFilter;
    const matchesStage = stageFilter === "all" || candidate.stage === stageFilter;

    return matchesSearch && matchesStatus && matchesStage;
  });

  return (
  <div>
    <h1>Candidates</h1>
    {loading && <p>Loading candidates...</p>}
    {error && <p>{error}</p>}
    {!loading && !error && (
      <>
        <button
          type="button"
          onClick={() => setShowRegisterForm((prevShowRegisterForm) => !prevShowRegisterForm)}
        >
          {showRegisterForm ? "Hide register form" : "Register new candidate"}
        </button>
        {showRegisterForm && (
          <form onSubmit={handleRegisterCandidate}>
            <input
              type="text"
              value={formData.full_name}
              onChange={(event) => updateFormField("full_name", event.target.value)}
              placeholder="Full name"
              aria-label="Candidate full name"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(event) => updateFormField("email", event.target.value)}
              placeholder="Email"
              aria-label="Candidate email"
            />
            <input
              type="text"
              value={formData.phone}
              onChange={(event) => updateFormField("phone", event.target.value)}
              placeholder="Phone"
              aria-label="Candidate phone"
            />
            <input
              type="text"
              value={formData.position}
              onChange={(event) => updateFormField("position", event.target.value)}
              placeholder="Position"
              aria-label="Candidate position"
            />
            <input
              type="url"
              value={formData.linkedin_url}
              onChange={(event) => updateFormField("linkedin_url", event.target.value)}
              placeholder="LinkedIn URL"
              aria-label="Candidate LinkedIn URL"
            />
            <input
              type="url"
              value={formData.cv_url}
              onChange={(event) => updateFormField("cv_url", event.target.value)}
              placeholder="CV URL"
              aria-label="Candidate CV URL"
            />
            <input
              type="number"
              min="0"
              value={formData.experience_years}
              onChange={(event) => updateFormField("experience_years", event.target.value)}
              placeholder="Experience years"
              aria-label="Candidate experience years"
            />
            <select
              value={formData.status}
              onChange={(event) => updateFormField("status", event.target.value)}
              aria-label="Candidate status"
            >
              {Object.entries(STATUS_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <select
              value={formData.stage}
              onChange={(event) => updateFormField("stage", event.target.value)}
              aria-label="Candidate stage"
            >
              {Object.entries(STAGE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <button type="submit" disabled={isSubmittingForm}>
              Add candidate
            </button>
          </form>
        )}
        {formSuccess && <p>{formSuccess}</p>}
        {formError && <p>{formError}</p>}
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name or email"
          aria-label="Search candidates"
        />
        <select
          value={statusFilter}
          onChange={(event) => updateFilterParam("status", event.target.value)}
          aria-label="Filter candidates by status"
        >
          <option value="all">All</option>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={stageFilter}
          onChange={(event) => updateFilterParam("stage", event.target.value)}
          aria-label="Filter candidates by stage"
        >
          <option value="all">All</option>
          {Object.entries(STAGE_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <ul>
          {filteredCandidates.map((candidate) => (
            <li key={candidate.id}>
              <Link href={`/candidates/${candidate.id}`}>{candidate.full_name}</Link> — {candidate.position} — {STATUS_LABELS[candidate.status]} — {STAGE_LABELS[candidate.stage]}
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);
}
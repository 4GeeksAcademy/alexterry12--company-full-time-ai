"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
  applied_at: string;
  status: string;
  stage: string;
};

type Note = {
  id: string;
  content: string;
  created_at: string;
};

type CandidateEditFormData = {
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

export default function CandidateDetailPage() {
  const params = useParams();
  const id = String(params.id ?? "");

  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState("");
  const [updateError, setUpdateError] = useState("");
  const [updatingField, setUpdatingField] = useState<"status" | "stage" | "">("");
  const [noteText, setNoteText] = useState("");
  const [noteSuccess, setNoteSuccess] = useState("");
  const [noteError, setNoteError] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [deletingNoteId, setDeletingNoteId] = useState("");
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFormData, setEditFormData] = useState<CandidateEditFormData>({
    full_name: "",
    email: "",
    phone: "",
    position: "",
    linkedin_url: "",
    cv_url: "",
    experience_years: "0",
    status: "received",
    stage: "pending",
  });
  const [editSuccess, setEditSuccess] = useState("");
  const [editError, setEditError] = useState("");
  const [isSavingEdit, setIsSavingEdit] = useState(false);

  useEffect(() => {
    if (!id) {
      setError("Candidate ID is missing");
      setLoading(false);
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    Promise.all([
      fetch(`${baseUrl}/records/${id}`).then((res) => {
        if (!res.ok) {
          throw new Error("Could not load candidate");
        }

        return res.json();
      }),
      fetch(`${baseUrl}/records/${id}/notes`).then((res) => {
        if (!res.ok) {
          throw new Error("Could not load notes");
        }

        return res.json();
      }),
    ])
      .then(([candidateData, notesData]) => {
        setCandidate(candidateData);
        setNotes(notesData.data ?? []);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load candidate details");
        setLoading(false);
      });
  }, [id]);

  async function updateCandidateField(
    field: "status" | "stage",
    value: string,
  ) {
    if (!candidate || !id) {
      return;
    }

    setUpdateSuccess("");
    setUpdateError("");
    setUpdatingField(field);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/records/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ [field]: value }),
        },
      );

      if (!response.ok) {
        throw new Error("Update failed");
      }

      setCandidate((prevCandidate) => {
        if (!prevCandidate) {
          return prevCandidate;
        }

        return {
          ...prevCandidate,
          [field]: value,
        };
      });

      setUpdateSuccess("Updated successfully");
    } catch {
      setUpdateError("Could not update candidate");
    } finally {
      setUpdatingField("");
    }
  }

  async function handleStatusChange(newValue: string) {
    await updateCandidateField("status", newValue);
  }

  async function handleStageChange(newValue: string) {
    await updateCandidateField("stage", newValue);
  }

  async function handleAddNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const content = noteText.trim();

    if (!content) {
      setNoteSuccess("");
      setNoteError("Note content cannot be empty");
      return;
    }

    setNoteSuccess("");
    setNoteError("");
    setIsAddingNote(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/records/${id}/notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        },
      );

      if (!response.ok) {
        throw new Error("Create note failed");
      }

      const noteData = await response.json();
      const createdNote: Note = noteData.data ?? noteData;

      setNotes((prevNotes) => [createdNote, ...prevNotes]);
      setNoteText("");
      setNoteSuccess("Updated successfully");
    } catch {
      setNoteError("Could not add note");
    } finally {
      setIsAddingNote(false);
    }
  }

  async function handleDeleteNote(noteId: string) {
    setNoteSuccess("");
    setNoteError("");
    setDeletingNoteId(noteId);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/records/${id}/notes/${noteId}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        throw new Error("Delete note failed");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      setNoteSuccess("Updated successfully");
    } catch {
      setNoteError("Could not delete note");
    } finally {
      setDeletingNoteId("");
    }
  }

  function openOrCloseEditForm() {
    if (!candidate) {
      return;
    }

    setShowEditForm((prevShowEditForm) => {
      const nextShowEditForm = !prevShowEditForm;

      if (nextShowEditForm) {
        setEditFormData({
          full_name: candidate.full_name,
          email: candidate.email,
          phone: candidate.phone,
          position: candidate.position,
          linkedin_url: candidate.linkedin_url,
          cv_url: candidate.cv_url,
          experience_years: String(candidate.experience_years),
          status: candidate.status,
          stage: candidate.stage,
        });
      }

      setEditSuccess("");
      setEditError("");

      return nextShowEditForm;
    });
  }

  function updateEditField(field: keyof CandidateEditFormData, value: string) {
    setEditFormData((prevEditFormData) => ({
      ...prevEditFormData,
      [field]: value,
    }));
  }

  function validateEditForm() {
    const fullName = editFormData.full_name.trim();
    const email = editFormData.email.trim();
    const position = editFormData.position.trim();
    const years = Number(editFormData.experience_years);

    if (!fullName || !email || !position) {
      return "Full name, email, and position are required";
    }

    if (Number.isNaN(years) || years < 0) {
      return "Experience years must be a non-negative number";
    }

    return "";
  }

  async function handleEditSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateEditForm();
    if (validationError) {
      setEditSuccess("");
      setEditError(validationError);
      return;
    }

    setEditSuccess("");
    setEditError("");
    setIsSavingEdit(true);

    try {
      const payload = {
        full_name: editFormData.full_name.trim(),
        email: editFormData.email.trim(),
        phone: editFormData.phone.trim(),
        position: editFormData.position.trim(),
        linkedin_url: editFormData.linkedin_url.trim(),
        cv_url: editFormData.cv_url.trim(),
        experience_years: Number(editFormData.experience_years),
        status: editFormData.status,
        stage: editFormData.stage,
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/records/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Update candidate failed");
      }

      setCandidate((prevCandidate) => {
        if (!prevCandidate) {
          return prevCandidate;
        }

        return {
          ...prevCandidate,
          ...payload,
        };
      });
      setShowEditForm(false);
      setEditSuccess("Updated successfully");
    } catch {
      setEditError("Could not update candidate");
    } finally {
      setIsSavingEdit(false);
    }
  }

  if (loading) {
    return <p>Loading candidate details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!candidate) {
    return <p>Candidate not found</p>;
  }

  return (
    <div>
      <h1>{candidate.full_name}</h1>
      <p>Email: {candidate.email}</p>
      <p>Phone: {candidate.phone}</p>
      <p>Position: {candidate.position}</p>
      <p>LinkedIn URL: {candidate.linkedin_url}</p>
      <p>CV URL: {candidate.cv_url}</p>
      <p>Experience (years): {candidate.experience_years}</p>
      <p>Applied at: {candidate.applied_at}</p>
      <button type="button" onClick={openOrCloseEditForm}>
        {showEditForm ? "Cancel" : "Edit"}
      </button>
      {showEditForm && (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editFormData.full_name}
            onChange={(event) => updateEditField("full_name", event.target.value)}
            placeholder="Full name"
            aria-label="Edit full name"
          />
          <input
            type="email"
            value={editFormData.email}
            onChange={(event) => updateEditField("email", event.target.value)}
            placeholder="Email"
            aria-label="Edit email"
          />
          <input
            type="text"
            value={editFormData.phone}
            onChange={(event) => updateEditField("phone", event.target.value)}
            placeholder="Phone"
            aria-label="Edit phone"
          />
          <input
            type="text"
            value={editFormData.position}
            onChange={(event) => updateEditField("position", event.target.value)}
            placeholder="Position"
            aria-label="Edit position"
          />
          <input
            type="url"
            value={editFormData.linkedin_url}
            onChange={(event) => updateEditField("linkedin_url", event.target.value)}
            placeholder="LinkedIn URL"
            aria-label="Edit LinkedIn URL"
          />
          <input
            type="url"
            value={editFormData.cv_url}
            onChange={(event) => updateEditField("cv_url", event.target.value)}
            placeholder="CV URL"
            aria-label="Edit CV URL"
          />
          <input
            type="number"
            min="0"
            value={editFormData.experience_years}
            onChange={(event) => updateEditField("experience_years", event.target.value)}
            placeholder="Experience years"
            aria-label="Edit experience years"
          />
          <select
            value={editFormData.status}
            onChange={(event) => updateEditField("status", event.target.value)}
            aria-label="Edit status"
          >
            {Object.entries(STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select
            value={editFormData.stage}
            onChange={(event) => updateEditField("stage", event.target.value)}
            aria-label="Edit stage"
          >
            {Object.entries(STAGE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button type="submit" disabled={isSavingEdit}>
            Save changes
          </button>
        </form>
      )}
      {editSuccess && <p>{editSuccess}</p>}
      {editError && <p>{editError}</p>}
      <p>Status: {STATUS_LABELS[candidate.status] ?? candidate.status}</p>
      <select
        value={candidate.status}
        onChange={(event) => handleStatusChange(event.target.value)}
        aria-label="Update candidate status"
        disabled={updatingField === "status"}
      >
        {Object.entries(STATUS_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <p>Stage: {STAGE_LABELS[candidate.stage] ?? candidate.stage}</p>
      <select
        value={candidate.stage}
        onChange={(event) => handleStageChange(event.target.value)}
        aria-label="Update candidate stage"
        disabled={updatingField === "stage"}
      >
        {Object.entries(STAGE_LABELS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {updateSuccess && <p>{updateSuccess}</p>}
      {updateError && <p>{updateError}</p>}

      <h2>Notes</h2>
      {notes.length === 0 && <p>No notes available.</p>}
      {notes.length > 0 && (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <p>{note.content}</p>
              <p>Created at: {note.created_at}</p>
              <button
                type="button"
                onClick={() => handleDeleteNote(note.id)}
                disabled={deletingNoteId === note.id}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleAddNote}>
        <textarea
          value={noteText}
          onChange={(event) => setNoteText(event.target.value)}
          aria-label="Add note content"
        />
        <button type="submit" disabled={isAddingNote}>
          Add note
        </button>
      </form>
      {noteSuccess && <p>{noteSuccess}</p>}
      {noteError && <p>{noteError}</p>}
    </div>
  );
}

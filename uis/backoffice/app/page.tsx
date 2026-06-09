import { calculateDenialRate, denialRateByPayer } from "@logic/utils/transformations";
import type { Claim } from "@logic/types/models";

const claims: Claim[] = [
  {
    claimId: "CL-1001",
    patientId: "PT-2201",
    locationId: "LOC-AUS-01",
    serviceType: "primary_care",
    payerName: "Blue Shield",
    payerId: "P-001",
    submissionDate: "2026-05-01",
    claimAmount: 420.0,
    status: "approved",
    resubmitted: false,
  },
  {
    claimId: "CL-1002",
    patientId: "PT-2202",
    locationId: "LOC-AUS-01",
    serviceType: "chronic_disease",
    payerName: "Blue Shield",
    payerId: "P-001",
    submissionDate: "2026-05-02",
    claimAmount: 780.0,
    status: "denied",
    denialReason: "coding_error",
    resubmitted: true,
  },
  {
    claimId: "CL-1003",
    patientId: "PT-2203",
    locationId: "LOC-MIA-01",
    serviceType: "preventive",
    payerName: "United Care",
    payerId: "P-002",
    submissionDate: "2026-05-03",
    claimAmount: 260.0,
    status: "submitted",
    resubmitted: false,
  },
  {
    claimId: "CL-1004",
    patientId: "PT-2204",
    locationId: "LOC-MIA-01",
    serviceType: "specialist",
    payerName: "United Care",
    payerId: "P-002",
    submissionDate: "2026-05-03",
    claimAmount: 1_200.0,
    status: "denied",
    denialReason: "missing_authorisation",
    resubmitted: false,
  },
  {
    claimId: "CL-1005",
    patientId: "PT-2205",
    locationId: "LOC-ATL-01",
    serviceType: "womens_health",
    payerName: "HealthFirst",
    payerId: "P-003",
    submissionDate: "2026-05-04",
    claimAmount: 520.0,
    status: "approved",
    resubmitted: false,
  },
  {
    claimId: "CL-1006",
    patientId: "PT-2206",
    locationId: "LOC-ATL-01",
    serviceType: "mental_health",
    payerName: "HealthFirst",
    payerId: "P-003",
    submissionDate: "2026-05-05",
    claimAmount: 340.0,
    status: "denied",
    denialReason: "service_not_covered",
    resubmitted: true,
  },
  {
    claimId: "CL-1007",
    patientId: "PT-2207",
    locationId: "LOC-SAT-01",
    serviceType: "paediatric",
    payerName: "Blue Shield",
    payerId: "P-001",
    submissionDate: "2026-05-06",
    claimAmount: 410.0,
    status: "approved",
    resubmitted: false,
  },
  {
    claimId: "CL-1008",
    patientId: "PT-2208",
    locationId: "LOC-SAT-01",
    serviceType: "primary_care",
    payerName: "United Care",
    payerId: "P-002",
    submissionDate: "2026-05-07",
    claimAmount: 300.0,
    status: "denied",
    denialReason: "incomplete_documentation",
    resubmitted: false,
  },
];

const totalClaims = claims.length;
const deniedClaims = claims.filter((claim) => claim.status === "denied").length;
const overallDenialRate = calculateDenialRate(claims);
const payerRates = denialRateByPayer(claims);

export default function Home() {
  return (
    <div className="space-y-8" id="overview">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Claims analytics</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Claims performance dashboard</h1>
            <p className="mt-2 text-slate-600">A quick operations snapshot of denial performance across payers.</p>
          </div>
          <div className="rounded-3xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
            Data source: root src logic import
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total claims</p>
          <p className="mt-3 text-4xl font-semibold text-slate-900">{totalClaims}</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Denied claims</p>
          <p className="mt-3 text-4xl font-semibold text-rose-700">{deniedClaims}</p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Overall denial rate</p>
          <p className="mt-3 text-4xl font-semibold text-slate-900">{overallDenialRate}%</p>
        </article>
      </div>

      <section id="denial-rate" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Denial rate by payer</h2>
        <p className="mt-2 text-sm text-slate-600">Calculated from sample claims using the shared root transformation logic.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3">Payer</th>
                <th className="px-4 py-3">Denial rate</th>
                <th className="px-4 py-3">Claim count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
              {Object.entries(payerRates).map(([payer, rate]) => (
                <tr key={payer}>
                  <td className="px-4 py-3 font-semibold">{payer}</td>
                  <td className="px-4 py-3">{rate}%</td>
                  <td className="px-4 py-3">{claims.filter((claim) => claim.payerName === payer).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="payer-table" className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Claim detail sample</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3">Claim ID</th>
                <th className="px-4 py-3">Payer</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
              {claims.map((claim) => (
                <tr key={claim.claimId}>
                  <td className="px-4 py-3 font-medium">{claim.claimId}</td>
                  <td className="px-4 py-3">{claim.payerName}</td>
                  <td className="px-4 py-3">{claim.locationId}</td>
                  <td className="px-4 py-3">{claim.status}</td>
                  <td className="px-4 py-3">${claim.claimAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

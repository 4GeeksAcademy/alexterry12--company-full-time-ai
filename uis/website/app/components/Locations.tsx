import { LocationEntry } from "./types";

const locations: LocationEntry[] = [
  {
    name: "HealthCore Austin Central",
    city: "Austin",
    state: "TX",
    phone: "(512) 340-8800",
    hours: "Mon-Fri 7am-8pm · Sat 9am-3pm",
  },
  {
    name: "HealthCore Austin North",
    city: "Austin",
    state: "TX",
    phone: "(512) 340-8810",
    hours: "Mon-Fri 8am-7pm",
  },
  {
    name: "HealthCore San Antonio",
    city: "San Antonio",
    state: "TX",
    phone: "(210) 720-4400",
    hours: "Mon-Fri 8am-6pm · Sat 9am-1pm",
  },
  {
    name: "HealthCore Miami",
    city: "Miami",
    state: "FL",
    phone: "(305) 510-7700",
    hours: "Mon-Fri 7am-8pm · Sat 9am-4pm",
  },
  {
    name: "HealthCore Orlando",
    city: "Orlando",
    state: "FL",
    phone: "(407) 892-6600",
    hours: "Mon-Fri 8am-6pm",
  },
  {
    name: "HealthCore Atlanta",
    city: "Atlanta",
    state: "GA",
    phone: "(404) 330-9900",
    hours: "Mon-Fri 8am-7pm",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="bg-brand-900 py-14 text-white" aria-labelledby="locations-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="locations-title" className="font-serif text-3xl font-black text-white">
          US Clinic Locations
        </h2>
        <p className="mt-2 text-brand-100">
          UK clinics serve a separate market and are not included in this public-facing website.
        </p>

        <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/15 lg:block">
          <table className="w-full border-collapse text-left" aria-label="HealthCore US clinic locations">
            <thead className="bg-white/10 text-sm uppercase tracking-wide text-brand-50">
              <tr>
                <th className="px-4 py-3">Clinic</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3">State</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm text-brand-50">
              {locations.map((location, index) => (
                <tr key={location.name} className={index % 2 === 0 ? "bg-white/5" : ""}>
                  <td className="px-4 py-3">{location.name}</td>
                  <td className="px-4 py-3">{location.city}</td>
                  <td className="px-4 py-3">{location.state}</td>
                  <td className="px-4 py-3">{location.phone}</td>
                  <td className="px-4 py-3">{location.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 lg:hidden" aria-label="HealthCore US clinic cards">
          {locations.map((location) => (
            <article key={location.name} className="panel-hover rounded-xl bg-white/10 p-4">
              <h3 className="font-bold text-white">{location.name}</h3>
              <p>{location.city}, {location.state}</p>
              <p>{location.phone}</p>
              <p>{location.hours}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

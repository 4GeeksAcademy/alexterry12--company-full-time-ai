import { HighlightItem } from "./types";

const highlights: HighlightItem[] = [
  { text: "Founded in Austin in 2011 and now serving communities in the US and UK." },
  { text: "Around 200 professionals focused on faster, patient-centered outpatient care." },
  { text: "HealthCore Digital is improving the full patient journey with better systems." },
];

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pt-16" aria-labelledby="hero-title">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="hc-reveal">
          <p className="mb-3 inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-bold uppercase tracking-wide text-brand-700">
            Outpatient care network
          </p>
          <h1 id="hero-title" className="font-serif text-4xl font-black leading-tight text-brand-900 sm:text-5xl">
            Healthcare that fits your life
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-700">
            12 outpatient clinics across the US and UK offering same-day appointments, extended hours, and bilingual care — so you can get the attention you need, when you need it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-900"
            >
              Request an appointment
            </a>
            <a
              href="#locations"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 transition hover:border-brand-600 hover:text-brand-700"
            >
              View locations
            </a>
          </div>
        </div>

        <aside className="hc-reveal hc-reveal-delay-1 space-y-4" aria-label="HealthCore highlights and clinic environment">
          <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <img
              src="https://media.medicare247.org/wp-content/uploads/2025/12/Multiple-Medical-Professionals.jpg"
              alt="Multiple medical professionals standing together in a modern clinical environment"
              className="hc-medical-image h-64 w-full object-cover sm:h-72"
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <h2 className="font-serif text-2xl font-black text-brand-900">Trusted care, modern access</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {highlights.map((highlight) => (
                <li key={highlight.text} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

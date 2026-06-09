import { Benefit } from "./types";

const benefits: Benefit[] = [
  { text: "Same-day appointments at most locations" },
  { text: "Extended hours — weekdays until 7pm or 8pm, Saturdays available" },
  { text: "Bilingual staff in English and Spanish at US locations" },
  { text: "12 clinics across Texas, Florida, Georgia, and the United Kingdom" },
];

export default function WhyHealthCore() {
  return (
    <section className="py-14" aria-labelledby="why-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 id="why-title" className="font-serif text-3xl font-black text-brand-900">
            Why HealthCore
          </h2>
          <p className="mt-3 max-w-xl text-slate-700">
            We combine clinical quality with practical access, helping patients get care quickly without losing continuity.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2" aria-label="HealthCore benefits">
          {benefits.map((benefit) => (
            <li key={benefit.text} className="panel-hover rounded-xl border border-brand-100 bg-brand-50 p-4 text-slate-800">
              {benefit.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

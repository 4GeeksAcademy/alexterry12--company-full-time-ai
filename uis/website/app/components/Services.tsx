import { GalleryImage, ServiceCard } from "./types";

const serviceCards: ServiceCard[] = [
  {
    title: "Primary Care & Chronic Disease",
    items: [
      "Same-day appointments with primary care physicians",
      "Ongoing management of diabetes, hypertension, and asthma",
    ],
  },
  {
    title: "Specialist Consultations",
    items: [
      "Cardiology, endocrinology, pulmonology, and women's health",
      "Referrals coordinated within the HealthCore network",
    ],
  },
  {
    title: "Preventive Health & Wellbeing",
    items: [
      "Screenings, vaccinations, and annual check-ups",
      "Mental health counselling and psychiatry referrals",
    ],
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor and patient discussing diagnostics on a digital screen",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=80",
    alt: "Confident doctor wearing a headset while using clinical software",
  },
  {
    src: "https://static.wixstatic.com/media/bf7dca_4b2b1c80586846958c6eb47d6eac3c44~mv2.jpg/v1/fill/w_670,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bf7dca_4b2b1c80586846958c6eb47d6eac3c44~mv2.jpg",
    alt: "Professional doctor using advanced healthcare technology",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-y border-slate-200 bg-white/90 py-14" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="services-title" className="font-serif text-3xl font-black text-brand-900">
          Services
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="panel-hover rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-extrabold text-slate-900">{service.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Professional clinical environment gallery">
          {galleryImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img src={image.src} alt={image.alt} className="hc-medical-image h-48 w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

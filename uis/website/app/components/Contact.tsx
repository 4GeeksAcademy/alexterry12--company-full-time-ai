import { ContactCard, SelectOption } from "./types";

const contactCards: ContactCard[] = [
  { title: "General enquiries", detail: "info@healthcore.com" },
  { title: "Austin HQ", detail: "(512) 340-8800" },
  { title: "Miami", detail: "(305) 510-7700" },
  { title: "UK (London)", detail: "+44 20 7946 0100" },
];

const languageOptions: SelectOption[] = [
  { value: "", label: "Select one" },
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
];

const clinicOptions: SelectOption[] = [
  { value: "", label: "Select a clinic" },
  { value: "HealthCore Austin Central", label: "HealthCore Austin Central" },
  { value: "HealthCore Austin North", label: "HealthCore Austin North" },
  { value: "HealthCore San Antonio", label: "HealthCore San Antonio" },
  { value: "HealthCore Miami", label: "HealthCore Miami" },
  { value: "HealthCore Orlando", label: "HealthCore Orlando" },
  { value: "HealthCore Atlanta", label: "HealthCore Atlanta" },
];

const timeOptions: SelectOption[] = [
  { value: "", label: "Select preferred time" },
  { value: "Morning", label: "Morning (7am-12pm)" },
  { value: "Afternoon", label: "Afternoon (12pm-5pm)" },
  { value: "Evening", label: "Evening (5pm-8pm)" },
];

const serviceOptions: SelectOption[] = [
  { value: "", label: "Select service" },
  { value: "Primary Care", label: "Primary Care" },
  { value: "Chronic Disease Management", label: "Chronic Disease Management" },
  { value: "Specialist Consultation", label: "Specialist Consultation" },
  { value: "Preventive Health", label: "Preventive Health" },
  { value: "Women's Health", label: "Women's Health" },
  { value: "Paediatric Care", label: "Paediatric Care" },
  { value: "Mental Health", label: "Mental Health" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="contact-title" className="font-serif text-3xl font-black text-brand-900">
          Contact
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <article key={card.title} className="panel-hover rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-bold text-slate-900">{card.title}</h3>
              <p className="mt-1 text-slate-700">{card.detail}</p>
            </article>
          ))}
        </div>

        <form className="mt-10 space-y-8" noValidate aria-describedby="form-status">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="first_name">
                First name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="last_name">
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="date_of_birth">
                Date of birth
              </label>
              <input
                id="date_of_birth"
                name="date_of_birth"
                type="date"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@provider.com"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-800" htmlFor="phone">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="+1 305 555 0191"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="preferred_language">
                Preferred language
              </label>
              <select
                id="preferred_language"
                name="preferred_language"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
                {languageOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="preferred_clinic">
                Preferred clinic
              </label>
              <select
                id="preferred_clinic"
                name="preferred_clinic"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
                {clinicOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="preferred_date">
                Preferred date
              </label>
              <input
                id="preferred_date"
                name="preferred_date"
                type="date"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="preferred_time">
                Preferred time of day
              </label>
              <select
                id="preferred_time"
                name="preferred_time"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
                {timeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-800" htmlFor="service_type">
                Service needed
              </label>
              <select
                id="service_type"
                name="service_type"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-semibold text-slate-800">Is this your first visit to HealthCore?</legend>
              <div className="mt-2 flex flex-wrap gap-5">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="new_patient" value="yes" className="h-4 w-4 accent-brand-700" />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="new_patient" value="no" className="h-4 w-4 accent-brand-700" />
                  <span>No</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="patient_id">
              Patient ID (optional)
            </label>
            <input
              id="patient_id"
              name="patient_id"
              type="text"
              placeholder="HC-A3F291"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <p className="mt-1 text-sm text-slate-600">
              Format: HC- followed by 6 alphanumeric characters (example: HC-A3F291)
            </p>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-semibold text-slate-800">Do you have health insurance?</legend>
              <div className="mt-2 flex flex-wrap gap-5">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="has_insurance" value="yes" className="h-4 w-4 accent-brand-700" />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="has_insurance" value="no" className="h-4 w-4 accent-brand-700" />
                  <span>No</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="insurance_provider">
                Insurance provider
              </label>
              <input
                id="insurance_provider"
                name="insurance_provider"
                type="text"
                maxLength={100}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800" htmlFor="insurance_member_id">
                Member ID
              </label>
              <input
                id="insurance_member_id"
                name="insurance_member_id"
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800" htmlFor="health_concern">
              Brief description of your health concern
            </label>
            <textarea
              id="health_concern"
              name="health_concern"
              required
              minLength={20}
              maxLength={500}
              rows={6}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-600">500 characters remaining</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <label className="inline-flex items-start gap-3" htmlFor="contact_consent">
              <input id="contact_consent" name="contact_consent" type="checkbox" required className="mt-1 h-4 w-4 rounded accent-brand-700" />
              <span className="text-sm text-slate-700">
                I consent to HealthCore contacting me to follow up on this enquiry.
              </span>
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="submit" className="rounded-xl bg-brand-700 px-6 py-3 text-base font-bold text-white transition hover:bg-brand-900">
              Submit enquiry
            </button>
            <button type="reset" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-bold text-slate-800 transition hover:border-brand-600 hover:text-brand-700">
              Clear form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

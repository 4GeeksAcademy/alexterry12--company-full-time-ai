import { NavLink } from "./types";

const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="relative z-10 border-b border-slate-200/70 bg-white/85 backdrop-blur" role="banner">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl bg-brand-700 text-sm font-bold text-white"
            aria-hidden="true"
          >
            HC
          </div>
          <p className="font-serif text-2xl font-black text-brand-900">HealthCore</p>
        </div>

        <nav
          aria-label="Primary navigation"
          className="order-3 flex basis-full items-center justify-center gap-4 border-t border-slate-200/80 pt-3 text-sm sm:gap-6 sm:text-base md:order-2 md:basis-auto md:border-0 md:pt-0"
        >
          {navLinks.map((link) => (
            <a key={link.href} className="font-semibold text-slate-700 transition hover:text-brand-700" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-2 md:order-3" role="group" aria-label="Language switcher">
          <button
            type="button"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
            aria-label="Cambiar a español"
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}

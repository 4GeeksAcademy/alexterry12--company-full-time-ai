import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Services from "./components/Services";
import WhyHealthCore from "./components/WhyHealthCore";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-900"
      >
        Skip to main content
      </a>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-20 h-72 bg-gradient-to-r from-brand-100 via-sky-100 to-emerald-100 blur-3xl"
        />

        <Header />

        <main id="main-content" className="relative z-10">
          <Hero />
          <Services />
          <WhyHealthCore />
          <Gallery />
          <Locations />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

import { GalleryImage } from "./types";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor in a digital radiology room reviewing imaging",
  },
  {
    src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    alt: "Smartly dressed physician analyzing data on a tablet",
  },
  {
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1000&q=80",
    alt: "Healthcare specialist using connected monitoring technology",
  },
  {
    src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1000&q=80",
    alt: "Doctor in a high-tech care setting with digital records",
  },
];

export default function Gallery() {
  return (
    <section className="pb-14" aria-label="Professional healthcare gallery">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
              <img src={image.src} alt={image.alt} className="hc-medical-image h-52 w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

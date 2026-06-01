export interface NavLink {
  href: string;
  label: string;
}

export interface HighlightItem {
  text: string;
}

export interface ServiceCard {
  title: string;
  items: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Benefit {
  text: string;
}

export interface LocationEntry {
  name: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
}

export interface ContactCard {
  title: string;
  detail: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

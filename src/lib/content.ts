import courtyard from "@/assets/stone-courtyard-house.png.asset.json";
import boundary from "@/assets/stone-boundary-wall.png.asset.json";
import hotel from "@/assets/stone-hotel-facade.png.asset.json";
import texture from "@/assets/stone-texture.jpg";
import installation from "@/assets/stone-installation.jpg";
import roof from "@/assets/stone-roof.jpg";
import garden from "@/assets/stone-garden.jpg";

export const img = {
  courtyard: courtyard.url,
  boundary: boundary.url,
  hotel: hotel.url,
  texture,
  installation,
  roof,
  garden,
};

export const company = {
  name: "Pokhara Stone & Suppliers Pvt. Ltd.",
  short: "PSS",
  address: "Pokhara-5, Parsyang, Kaski, Nepal",
  // TODO: replace with verified company contact details
  phone: "",
  email: "",
};

export type Stone = { slug: string; name: string; summary: string; uses: string[]; image: string };

export const stones: Stone[] = [
  { slug: "natural-wall-stone", name: "Natural Wall Stone", summary: "Split-face and stacked stone for walls with depth, shadow and texture.", uses: ["Exterior walls", "Feature walls", "Entrance pillars"], image: img.texture },
  { slug: "natural-roof-stone", name: "Natural Roof Stone", summary: "Traditional slate roofing for hotels, restaurants and homes where the design suits it.", uses: ["Hotels", "Restaurants", "Residential roofs"], image: img.roof },
  { slug: "parking-stone", name: "Stone for Parking Areas", summary: "Hard-wearing flagstone for driveways, courtyards and parking.", uses: ["Driveways", "Courtyards", "Car parking"], image: img.courtyard },
  { slug: "exterior-cladding", name: "Exterior Cladding Stone", summary: "Natural stone cladding for facades and multi-storey buildings.", uses: ["Building facades", "Columns", "Commercial exteriors"], image: img.hotel },
  { slug: "garden-landscape", name: "Garden & Landscape Stone", summary: "Stepping stones, retaining walls and stone for outdoor spaces.", uses: ["Garden paths", "Retaining walls", "Landscaping"], image: img.garden },
  { slug: "architectural-finishes", name: "Architectural Stone Finishes", summary: "Boundary walls, gate pillars and detailed stone finishes.", uses: ["Boundary walls", "Gate pillars", "Detailing"], image: img.boundary },
];

export type Project = { title: string; category: string; image: string };

export const projects: Project[] = [
  { title: "Multi-Storey Stone Building", category: "Commercial · Facade", image: img.hotel },
  { title: "Stone Courtyard & Parking", category: "Residential · Parking", image: img.courtyard },
  { title: "Stone Boundary Wall", category: "Residential · Boundary", image: img.boundary },
  { title: "Garden Stone Pathway", category: "Landscape · Garden", image: img.garden },
  { title: "Natural Stone Roofing", category: "Residential · Roof", image: img.roof },
  { title: "Stone Paving Installation", category: "Craft · Installation", image: img.installation },
];

export const galleryCategories = ["All", "Facades", "Walls", "Parking", "Gardens", "Details"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export const gallery: { src: string; alt: string; category: Exclude<GalleryCategory, "All"> }[] = [
  { src: img.hotel, alt: "Multi-storey building with stone-clad columns", category: "Facades" },
  { src: img.courtyard, alt: "Flagstone courtyard in front of a stone house", category: "Parking" },
  { src: img.texture, alt: "Close-up of split-face wall stone", category: "Details" },
  { src: img.boundary, alt: "Stacked stone boundary wall and gate pillars", category: "Walls" },
  { src: img.garden, alt: "Stepping stone path beside a dry stone wall", category: "Gardens" },
  { src: img.roof, alt: "House with natural slate stone roof", category: "Facades" },
  { src: img.installation, alt: "Craftsman laying flagstone paving", category: "Details" },
];

export const videos = [
  { title: "Interior Stone Design", poster: img.texture, url: "" },
  { title: "Gate Wall Stone and Car Parking Stone", poster: img.boundary, url: "" },
];

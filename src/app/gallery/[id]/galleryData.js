// app/gallery/[id]/galleryData.js
// Single source of truth for gallery project data.
// FIX: folder name now matches the actual /public/gallaryImg casing exactly.
// (Local dev on Windows/Mac is case-insensitive so this bug was invisible
// locally, but case-sensitive production hosts like Vercel/Linux served
// broken images on every gallery detail page.)
const GALLERY_FOLDER = '/gallaryImg';

export const galleryData = {
  dining: {
    title: "Royal Oak Dining",
    images: [`${GALLERY_FOLDER}/dining.jpg`],
    description: "Handcrafted royal oak dining table with intricate details, built by Vishwakarma Carpenter in Mumbai.",
    rating: "4.9"
  },
  mandir: {
    title: "Sheesham Mandir",
    images: [`${GALLERY_FOLDER}/mandir.jpg`],
    description: "Traditional sheesham wood pooja mandir with brass fittings, custom-built for a Mumbai home.",
    rating: "4.8"
  },
  center: {
    title: "Wood Center Table",
    images: [`${GALLERY_FOLDER}/center_table.jpg`],
    description: "Elegant wooden center table with glass top, custom carpentry work in Mumbai.",
    rating: "4.9"
  },
  bed: {
    title: "Teak King Bed",
    images: [`${GALLERY_FOLDER}/bed.jpg`],
    description: "Solid teak king size bed with storage, handcrafted by our expert carpenters.",
    rating: "5.0"
  },
  sofa: {
    title: "L-Shape Sofa Set",
    images: [`${GALLERY_FOLDER}/sofa.jpg`],
    description: "Modern L-shaped wooden sofa set with premium upholstery, made to order.",
    rating: "4.7"
  },
  kitchen: {
    title: "Modular Kitchen",
    images: [`${GALLERY_FOLDER}/kitchen.jpg`],
    description: "Custom modular kitchen with smart storage, designed and built for a Mumbai home.",
    rating: "4.9"
  }
};

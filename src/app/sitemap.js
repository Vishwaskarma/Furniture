// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: "https://vishwakarmacarpenter.shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://vishwakarmacarpenter.shop/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vishwakarmacarpenter.shop/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
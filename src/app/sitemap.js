// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://www.vishwakarmacarpenter.shop';
  
  // Gallery categories
  const galleryCategories = ['dining', 'mandir', 'center', 'bed', 'sofa', 'kitchen'];
  
  // Generate gallery URLs
  const galleryUrls = galleryCategories.map(category => ({
    url: `${baseUrl}/gallery/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...galleryUrls, // ✅ ADDED: All gallery category pages
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
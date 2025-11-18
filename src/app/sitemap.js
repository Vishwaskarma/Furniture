// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://www.vishwakarmacarpenter.shop';
  
  // Gallery categories
  const galleryCategories = ['dining', 'mandir', 'center', 'bed', 'sofa', 'kitchen'];
  
  // Location-based carpenter pages for SEO
  const carpenterLocations = [
    'nallasopara',
    'vasai-virar',
    'andheri',
    'borivali',
    'thane',
    'dadar',
    'bandra',
    'malad',
    'kandivali',
    'powai'
  ];

  // Generate gallery URLs
  const galleryUrls = galleryCategories.map(category => ({
    url: `${baseUrl}/gallery/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Generate carpenter location URLs
  const carpenterUrls = carpenterLocations.map(location => ({
    url: `${baseUrl}/carpenter-in-${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    // Homepage - Highest Priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Main Gallery Page
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // All Gallery Category Pages
    ...galleryUrls,

    // Main Carpenter Services Page - High Priority
    {
      url: `${baseUrl}/carpenter-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // All Location-Based Carpenter Pages
    ...carpenterUrls,

    // Contact Page
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // About/Services Page (if you have one)
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
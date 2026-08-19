// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://www.vishwakarmacarpenter.shop';

  // Gallery categories — must match the keys in app/gallery/[id]/galleryData.js
  const galleryCategories = ['dining', 'mandir', 'center', 'bed', 'sofa', 'kitchen'];

  // Location-based carpenter pages — must match the keys in
  // app/carpenter-in-[location]/page.jsx exactly (including hyphenation),
  // or the sitemap will submit 404s to Google Search Console.
  const carpenterLocations = [
    'nalla-sopara',
    'vasai-virar',
    'andheri',
    'borivali',
    'thane',
    'dadar',
    'bandra',
    'malad',
    'kandivali',
    'powai',
    'mira-road',
    'virar',
    'goregaon',
    'jogeshwari',
  ];

  const galleryUrls = galleryCategories.map((category) => ({
    url: `${baseUrl}/gallery/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const carpenterUrls = carpenterLocations.map((location) => ({
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

    // All Gallery Category Pages
    ...galleryUrls,

    // All Location-Based Carpenter Pages
    ...carpenterUrls,

    // NOTE: /carpenter-services, /contact and /about were removed from this
    // sitemap — there are no matching route files for them in src/app, so
    // they were 404ing and getting flagged as sitemap errors in Search
    // Console. Add them back here only once those pages actually exist.
  ];
}

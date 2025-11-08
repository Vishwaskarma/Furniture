// app/gallery/[id]/page.jsx
import { Hammer } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const buckets = {
  dining: Array(28).fill('https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg'),
  mandir: Array(22).fill('https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg'),
  center: Array(19).fill('https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181942_1280.jpg'),
  bed: Array(25).fill('https://cdn.pixabay.com/photo/2016/11/19/13/12/bed-1839179_1280.jpg'),
  sofa: Array(30).fill('https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg'),
  kitchen: Array(35).fill('https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg')
};

const categoryNames = {
  dining: 'Dining Table',
  mandir: 'Mandir & Pooja Unit',
  center: 'Center Table',
  bed: 'Bed',
  sofa: 'Sofa Set',
  kitchen: 'Modular Kitchen'
};

const categoryDescriptions = {
  dining: 'Custom dining tables in Mumbai. Solid wood, marble top, glass top designs. 28+ real photos.',
  mandir: 'Traditional & modern mandir designs. Teak, sheesham wood pooja units. 22+ real photos.',
  center: 'Stylish center tables with marble, glass & wood. Perfect for living rooms. 19+ real photos.',
  bed: 'King size, queen size wooden beds. Storage beds, hydraulic beds. 25+ real photos.',
  sofa: 'L-shape, U-shape sofa sets. Fabric & leather options. 30+ real photos.',
  kitchen: 'Modular kitchens with German fittings. 10-year warranty. 35+ real photos.'
};

// generateMetadata - SAFE
export async function generateMetadata({ params }) {
  const { id } = params;

  if (!id || !buckets[id]) {
    return { title: 'Gallery Not Found' };
  }

  const categoryName = categoryNames[id] || id.charAt(0).toUpperCase() + id.slice(1);
  const description = categoryDescriptions[id] || `View ${id} furniture photos`;
  const photoCount = buckets[id].length;

  return {
    title: `${categoryName} Gallery - ${photoCount}+ Real Photos | Vishwakarma Carpenter Mumbai`,
    description,
    keywords: `${id} mumbai, ${id} design, custom ${id}, ${id} maker mumbai, carpenter ${id}, ${id} photos`,
    openGraph: {
      title: `${categoryName} - ${photoCount}+ Photos | Vishwakarma Carpenter`,
      description,
      url: `https://www.vishwakarmacarpenter.shop/gallery/${id}`,
      images: [{
        url: buckets[id][0] || '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${categoryName} by Vishwakarma Carpenter Mumbai`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} Gallery - ${photoCount}+ Photos`,
      description,
      images: [buckets[id][0] || '/og-image.jpg'],
    },
  };
}

// generateStaticParams - OK
export async function generateStaticParams() {
  return Object.keys(buckets).map((id) => ({ id }));
}

// PhotoPage - 100% SAFE
export default function PhotoPage({ params }) {
  const { id } = params;

  // Agar id nahi ya category nahi → 404
  if (!id || !buckets[id]) {
    notFound();
  }

  const photos = buckets[id];
  const photoCount = photos.length;
  const categoryName = categoryNames[id] || id.charAt(0).toUpperCase() + id.slice(1);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.vishwakarmacarpenter.shop" },
      { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://www.vishwakarmacarpenter.shop/gallery" },
      { "@type": "ListItem", "position": 3, "name": categoryName, "item": `https://www.vishwakarmacarpenter.shop/gallery/${id}` }
    ]
  };

  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": `${categoryName} Gallery`,
    "description": categoryDescriptions[id],
    "url": `https://www.vishwakarmacarpenter.shop/gallery/${id}`,
    "image": photos.slice(0, 10).map((src, i) => ({
      "@type": "ImageObject",
      "url": src,
      "name": `${categoryName} Photo ${i + 1}`,
      "description": `Custom ${categoryName} by Vishwakarma Carpenter Mumbai`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-orange-500/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Hammer className="h-8 w-8 text-orange-400" />
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                JANTA FURNITURE
              </span>
            </div>
            <a href="/" className="text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors">
              Close Gallery
            </a>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="pt-24 pb-16 px-6">
          <h1 className="text-center text-5xl font-black mb-12">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
              {categoryName} — {photoCount}+ REAL PHOTOS
            </span>
          </h1>
          <p className="text-center text-gray-400 text-lg mb-12 max-w-3xl mx-auto">
            {categoryDescriptions[id]}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {photos.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-900">
                <Image
                  src={src}
                  alt={`${categoryName} photo ${i + 1} - Custom furniture by Vishwakarma Carpenter Mumbai`}
                  width={600}
                  height={600}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                  priority={i < 4}
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-orange-400 font-bold text-sm">Photo {i + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/918169541472?text=Hi%2C%20I%20saw%20your%20gallery%20and%20want%20a%20quote%20for%20custom%20furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 font-black text-lg border-2 border-orange-300"
          >
            WhatsApp Price
          </a>
        </div>
      </div>
    </>
  );
}
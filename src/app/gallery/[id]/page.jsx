// app/gallery/[id]/page.jsx
// SERVER COMPONENT — required so each gallery item gets its own unique
// <title>/<meta description> in Google search results, instead of every
// one of these 6 indexed pages showing the generic sitewide homepage title.
import { galleryData } from './galleryData';
import GalleryDetailClient from './GalleryDetailClient';

export async function generateStaticParams() {
  return Object.keys(galleryData).map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const project = galleryData[params.id];

  if (!project) {
    return { title: 'Project Not Found | Vishwakarma Carpenter' };
  }

  const title = `${project.title} – Custom Carpentry Work in Mumbai`;
  const description = `${project.description} By Vishwakarma Carpenter, Mumbai's trusted custom furniture maker. Call +91 81695 41472 for a free quote.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.vishwakarmacarpenter.shop/gallery/${params.id}`,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: project.images[0],
          alt: project.title,
        },
      ],
    },
  };
}

export default function GalleryDetailPage({ params }) {
  return <GalleryDetailClient projectId={params.id} />;
}

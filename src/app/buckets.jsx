// app/gallery/[id]/page.jsx
'use client';
import { Hammer } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const buckets = {
  dining: Array(28).fill('https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg'),
  mandir: Array(22).fill('https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg'),
  center: Array(19).fill('https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181942_1280.jpg'),
  bed: Array(25).fill('https://cdn.pixabay.com/photo/2016/11/19/13/12/bed-1839179_1280.jpg'),
  sofa: Array(30).fill('https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569318_1280.jpg'),
  kitchen: Array(35).fill('https://cdn.pixabay.com/photo/2017/03/28/12/10/chair-2181957_1280.jpg')
};

export default function PhotoPage() {
  const params = useParams();
  const id = params?.id;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (id) {
      setPhotos(buckets[id] || []);
    }
  }, [id]);

  if (!id) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-orange-400 text-2xl font-bold">Gallery not found</p>
          <a href="/" className="text-orange-300 hover:text-orange-200 mt-4 inline-block">
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Hammer className="h-8 w-8 text-orange-400" />
            <span className="text-2xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              JANTA FURNITURE
            </span>
          </div>
          <a 
            href="/" 
            className="text-orange-400 hover:text-orange-300 flex items-center gap-2 transition-colors"
          >
            Close Gallery
          </a>
        </div>
      </div>

      <div className="pt-24 pb-16 px-6">
        <h1 className="text-center text-5xl font-black mb-12">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            {id.toUpperCase()} — {photos.length}+ REAL PHOTOS
          </span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src={src}
                alt={`${id} furniture photo ${i + 1}`}
                width={600}
                height={600}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                priority={i < 4}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-orange-400 font-bold text-sm">Photo {i + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 font-black text-lg border-2 border-orange-300"
        >
          📱 WhatsApp Price
        </button>
      </div>
    </div>
  );
}
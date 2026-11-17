import { useState } from 'react';
import {
  GALLERY_PHOTOS,
  GalleryCategory,
  GalleryPhoto,
} from '../data/villageData';
import { VillageImage } from '../components/VillageImage';
import { GalleryLightbox } from '../components/GalleryLightbox';

const CATEGORIES: GalleryCategory[] = [
  'Semua',
  'Pemandangan',
  'Kegiatan',
  'Kuliner',
  'Penginapan',
];

export function GalleryScreen() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos: GalleryPhoto[] =
    selectedCategory === 'Semua'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="py-8 md:py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="space-y-4">
          <div>
            <h1 className="font-serif text-[28px] md:text-[34px] font-bold text-[#2F6B3F] leading-tight">
              Galeri Desa Wisata Lereng Asri
            </h1>
            <p className="text-[17px] text-[#4A473F] mt-2 leading-[1.6]">
              Ketuk foto mana saja untuk melihat ukuran penuh dan menggeser koleksi gambar.
            </p>
          </div>

          {/* Category Filters */}
          <div
            className="flex flex-wrap gap-2.5"
            role="group"
            aria-label="Penyaring kategori foto"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[48px] px-4 rounded-xl text-[16px] font-bold whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-[#2F6B3F] text-white'
                      : 'bg-white text-[#2B2A26] border border-[#D8CEBE] hover:bg-[#F2EADB]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </header>

        {/* Two-column mobile photo grid (expands cleanly on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group bg-white rounded-2xl border border-[#D8CEBE] overflow-hidden shadow-xs text-left flex flex-col focus-visible:outline-2 focus-visible:outline-[#2F6B3F]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E4EBDD]">
                <VillageImage
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                />
              </div>
              <div className="p-3">
                <p className="text-[13px] font-bold text-[#2F6B3F]">
                  {photo.category}
                </p>
                <p className="text-[15px] font-semibold text-[#2B2A26] leading-snug mt-0.5 line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Swipeable Lightbox */}
      <GalleryLightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryPhoto } from '../data/villageData';
import { VillageImage } from './VillageImage';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}

export function GalleryLightbox({
  photos,
  currentIndex,
  onClose,
  onChangeIndex,
}: GalleryLightboxProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (currentIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        onChangeIndex((currentIndex + 1) % photos.length);
      }
      if (e.key === 'ArrowLeft') {
        onChangeIndex((currentIndex - 1 + photos.length) % photos.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, photos.length, onClose, onChangeIndex]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const photo = photos[currentIndex];
  const goPrev = () => onChangeIndex((currentIndex - 1 + photos.length) % photos.length);
  const goNext = () => onChangeIndex((currentIndex + 1) % photos.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141714]/95 flex flex-col justify-between"
      role="dialog"
      aria-modal="true"
      aria-label="Tampilan foto layar penuh"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
        const diff = touchStartX.current - endX;
        if (Math.abs(diff) > 45) {
          if (diff > 0) goNext();
          else goPrev();
        }
        touchStartX.current = null;
      }}
    >
      {/* Top Bar with Counter & Large Corner Close Button */}
      <div className="flex items-center justify-between px-4 py-3 text-white">
        <span className="text-[16px] font-semibold tabular-nums text-[#E5DEC9]">
          Foto {currentIndex + 1} dari {photos.length} · {photo.category}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup tampilan foto"
          className="w-14 h-14 rounded-2xl bg-white/15 hover:bg-white/25 text-white flex items-center justify-center active:scale-95"
        >
          <X className="w-7 h-7" strokeWidth={2.5} />
        </button>
      </div>

      {/* Main Image Viewport with Swipe & Arrow Controls */}
      <div className="relative flex-1 flex items-center justify-center px-3 sm:px-14 overflow-hidden">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Foto sebelumnya"
          className="absolute left-2 sm:left-4 z-10 w-12 h-12 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center border border-white/20"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <div className="w-full max-w-4xl max-h-[70vh] flex items-center justify-center">
          <VillageImage
            src={photo.image}
            alt={photo.alt}
            loading="eager"
            className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl"
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Foto berikutnya"
          className="absolute right-2 sm:right-4 z-10 w-12 h-12 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center border border-white/20"
        >
          <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="px-5 py-5 bg-gradient-to-t from-black/90 to-transparent text-white">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <p className="font-serif text-[19px] font-semibold text-white leading-snug">
            {photo.caption}
          </p>
          <p className="text-[14px] text-[#C8CEBF] mt-1">
            Lokasi: {photo.location} · Geser kiri atau kanan untuk melihat foto lain
          </p>
        </div>
      </div>
    </div>
  );
}

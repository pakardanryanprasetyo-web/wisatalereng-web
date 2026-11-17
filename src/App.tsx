import { useState, useEffect } from 'react';
import {
  GALLERY_PHOTOS,
  PACKAGES,
  ScreenId,
  TourPackage,
} from './data/villageData';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { HomeScreen } from './pages/HomeScreen';
import { PackagesScreen } from './pages/PackagesScreen';
import { PackageDetailScreen } from './pages/PackageDetailScreen';
import { GalleryScreen } from './pages/GalleryScreen';
import { LocationScreen } from './pages/LocationScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage>(PACKAGES[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState<TourPackage | null>(null);

  const [homeLightboxIndex, setHomeLightboxIndex] = useState<number | null>(null);

  const navigateTo = (screen: ScreenId) => {
    setCurrentScreen(screen);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPackageDetail = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    navigateTo('package-detail');
  };

  const handleOpenWhatsApp = (pkg?: TourPackage) => {
    setBookingPackage(pkg ?? null);
    setBookingModalOpen(true);
  };

  useEffect(() => {
    const titles: Record<ScreenId, string> = {
      home: 'Desa Wisata Lereng Asri — Wisata Alam, Budaya & Kuliner Desa',
      packages: 'Paket Wisata — Desa Wisata Lereng Asri',
      'package-detail': `${selectedPackage.name} — Desa Wisata Lereng Asri`,
      gallery: 'Galeri Foto — Desa Wisata Lereng Asri',
      location: 'Lokasi & Petunjuk Arah — Desa Wisata Lereng Asri',
    };
    document.title = titles[currentScreen];
  }, [currentScreen, selectedPackage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EA] text-[#2B2A26]">
      <TopBar
        currentScreen={currentScreen}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onNavigate={navigateTo}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={navigateTo}
            onSelectPackageDetail={handleOpenPackageDetail}
            onOpenWhatsApp={handleOpenWhatsApp}
            onOpenPhoto={(index) => setHomeLightboxIndex(index)}
          />
        )}

        {currentScreen === 'packages' && (
          <PackagesScreen
            onSelectPackageDetail={handleOpenPackageDetail}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentScreen === 'package-detail' && (
          <PackageDetailScreen
            pkg={selectedPackage}
            onBack={() => navigateTo('packages')}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentScreen === 'gallery' && <GalleryScreen />}

        {currentScreen === 'location' && (
          <LocationScreen onOpenWhatsApp={() => handleOpenWhatsApp()} />
        )}
      </main>

      {currentScreen !== 'package-detail' && (
        <Footer
          onNavigate={navigateTo}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
        />
      )}

      {/* Floating Round WhatsApp Button (56px) at bottom-right */}
      {currentScreen !== 'package-detail' && (
        <button
          type="button"
          onClick={() => handleOpenWhatsApp()}
          aria-label="Pesan atau tanya lewat WhatsApp"
          className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-[#132619] shadow-lg flex items-center justify-center active:scale-95 focus-visible:outline-2 focus-visible:outline-[#2F6B3F]"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      )}

      {/* WhatsApp Booking Sheet */}
      <WhatsAppBookingModal
        isOpen={bookingModalOpen}
        initialPackage={bookingPackage}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Home Gallery Lightbox */}
      <GalleryLightbox
        photos={GALLERY_PHOTOS}
        currentIndex={homeLightboxIndex}
        onClose={() => setHomeLightboxIndex(null)}
        onChangeIndex={setHomeLightboxIndex}
      />
    </div>
  );
}

import { Menu, X } from 'lucide-react';
import { ScreenId, VILLAGE_CONTACT } from '../data/villageData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TopBarProps {
  currentScreen: ScreenId;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNavigate: (screen: ScreenId) => void;
  onOpenWhatsApp: () => void;
}

const NAV_ITEMS: { id: ScreenId; label: string }[] = [
  { id: 'home', label: 'Beranda' },
  { id: 'packages', label: 'Paket Wisata' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'location', label: 'Lokasi' },
];

export function TopBar({
  currentScreen,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
  onOpenWhatsApp,
}: TopBarProps) {
  const activeNavId: ScreenId =
    currentScreen === 'package-detail' ? 'packages' : currentScreen;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EA]/95 backdrop-blur-sm border-b border-[#D8CEBE]">
      <div className="max-w-6xl mx-auto px-4 h-[58px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-serif text-[21px] font-bold text-[#2F6B3F] tracking-tight whitespace-nowrap shrink-0 min-h-[48px] flex items-center focus-visible:outline-2 focus-visible:outline-[#2F6B3F] rounded-lg"
        >
          {VILLAGE_CONTACT.brandName}
        </button>

        {/* Zone 2: Desktop Single-Line Text Nav Links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi utama">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`min-h-[44px] px-1 text-[16px] font-semibold whitespace-nowrap shrink-0 border-b-2 transition-colors ${
                  isActive
                    ? 'text-[#2F6B3F] border-[#2F6B3F]'
                    : 'text-[#2B2A26] border-transparent hover:text-[#2F6B3F] hover:border-[#8DB580]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Desktop Primary Action / Mobile "Menu" Button */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="hidden md:inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-[#25D366] text-[#132619] text-[15px] font-bold whitespace-nowrap shrink-0 hover:bg-[#20BD5A] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Tanya via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={onToggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center gap-2 min-h-[48px] min-w-[48px] px-3 rounded-xl text-[#2F6B3F] font-bold text-[16px] hover:bg-[#EFE7D6] active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>{isMenuOpen ? 'Tutup' : 'Menu'}</span>
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.4} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2.4} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <nav
          aria-label="Menu mobile"
          className="md:hidden bg-[#FAF5EA] border-t border-[#D8CEBE] px-4 py-4 space-y-3 shadow-md"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`w-full min-h-[56px] px-4 rounded-xl text-left text-[18px] font-bold flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-[#2F6B3F] text-white'
                    : 'bg-white text-[#2B2A26] border border-[#D8CEBE] hover:bg-[#F3ECE0]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              onToggleMenu();
              onOpenWhatsApp();
            }}
            className="w-full min-h-[56px] px-4 rounded-xl bg-[#25D366] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2.5"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Pesan lewat WhatsApp</span>
          </button>
        </nav>
      )}
    </header>
  );
}

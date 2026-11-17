import { Instagram, Facebook, Youtube, MapPin, Clock, Phone } from 'lucide-react';
import { ScreenId, VILLAGE_CONTACT } from '../data/villageData';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenWhatsApp: () => void;
}

export function Footer({ onNavigate, onOpenWhatsApp }: FooterProps) {
  return (
    <footer className="bg-[#23221E] text-[#FAF5EA] pt-10 pb-24 md:pb-12 px-4 border-t border-[#3B3932]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Address */}
        <div className="space-y-3">
          <h3 className="font-serif text-[22px] font-bold text-white">
            {VILLAGE_CONTACT.fullName}
          </h3>
          <div className="flex items-start gap-2.5 text-[#E5DEC9] text-[16px] leading-relaxed">
            <MapPin className="w-5 h-5 shrink-0 mt-1 text-[#8DB580]" strokeWidth={2.1} />
            <p>{VILLAGE_CONTACT.address}</p>
          </div>
        </div>

        {/* Hours & WhatsApp */}
        <div className="space-y-3">
          <h4 className="font-serif text-[18px] font-semibold text-white">
            Layanan Tamu
          </h4>
          <div className="flex items-start gap-2.5 text-[#E5DEC9] text-[16px]">
            <Clock className="w-5 h-5 shrink-0 mt-0.5 text-[#8DB580]" strokeWidth={2.1} />
            <div>
              <p className="font-semibold text-white">Jam Balasan WhatsApp</p>
              <p>{VILLAGE_CONTACT.replyHours}</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 text-[#E5DEC9] text-[16px]">
            <Phone className="w-5 h-5 shrink-0 text-[#8DB580]" strokeWidth={2.1} />
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="font-bold text-[#8DB580] underline underline-offset-4 hover:text-white min-h-[48px] flex items-center tabular-nums"
            >
              WhatsApp: {VILLAGE_CONTACT.whatsappDisplay}
            </button>
          </div>
        </div>

        {/* Navigation & Social Media */}
        <div className="space-y-4">
          <h4 className="font-serif text-[18px] font-semibold text-white">
            Ikuti Kabar Desa
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Desa Wisata Lereng Asri"
              className="w-12 h-12 rounded-xl bg-[#34322C] text-[#FAF5EA] hover:bg-[#2F6B3F] flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" strokeWidth={2} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Desa Wisata Lereng Asri"
              className="w-12 h-12 rounded-xl bg-[#34322C] text-[#FAF5EA] hover:bg-[#2F6B3F] flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5" strokeWidth={2} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Desa Wisata Lereng Asri"
              className="w-12 h-12 rounded-xl bg-[#34322C] text-[#FAF5EA] hover:bg-[#2F6B3F] flex items-center justify-center transition-colors"
            >
              <Youtube className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-[15px] text-[#D8CEBE]">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="min-h-[44px] hover:text-white underline-offset-4 hover:underline"
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={() => onNavigate('packages')}
              className="min-h-[44px] hover:text-white underline-offset-4 hover:underline"
            >
              Paket Wisata
            </button>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="min-h-[44px] hover:text-white underline-offset-4 hover:underline"
            >
              Galeri
            </button>
            <button
              type="button"
              onClick={() => onNavigate('location')}
              className="min-h-[44px] hover:text-white underline-offset-4 hover:underline"
            >
              Lokasi
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#3B3932] text-[14px] text-[#C8BFA9]">
        © {new Date().getFullYear()} {VILLAGE_CONTACT.fullName}. Dikelola oleh Kelompok Sadar Wisata Warga Desa.
      </div>
    </footer>
  );
}

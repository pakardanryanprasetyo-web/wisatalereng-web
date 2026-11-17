import { useState } from 'react';
import {
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Car,
  Sparkles,
  Home,
  Coffee,
} from 'lucide-react';
import { NEARBY_FACILITIES, VILLAGE_CONTACT } from '../data/villageData';
import { VillageMap } from '../components/VillageMap';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface LocationScreenProps {
  onOpenWhatsApp: () => void;
}

const FACILITY_ICONS: Record<string, typeof Car> = {
  parkir: Car,
  toilet: Sparkles,
  mushola: Home,
  warung: Coffee,
};

export function LocationScreen({ onOpenWhatsApp }: LocationScreenProps) {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VILLAGE_CONTACT.address);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 3000);
    } catch {
      setAddressCopied(false);
    }
  };

  return (
    <div className="pb-12">
      {/* Half-Screen-Height Full-Width Map */}
      <section aria-label="Peta Desa Wisata Lereng Asri">
        <div className="max-w-6xl mx-auto md:px-4 md:pt-6">
          <div className="md:rounded-2xl overflow-hidden">
            <VillageMap
              heightClass="h-[50vh] min-h-[300px]"
              interactiveLegend
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 pt-8 space-y-8">
        {/* Full Address & Simple Directions */}
        <section className="space-y-4">
          <h1 className="font-serif text-[28px] md:text-[34px] font-bold text-[#2F6B3F] leading-tight">
            Lokasi &amp; Petunjuk Arah
          </h1>

          <div className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5" strokeWidth={2.3} />
              <div>
                <h2 className="font-serif text-[19px] font-bold text-[#2B2A26]">
                  Alamat Lengkap
                </h2>
                <p className="text-[17px] text-[#2B2A26] leading-[1.6] mt-1">
                  {VILLAGE_CONTACT.address}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#EFE7D6]">
              <h2 className="font-serif text-[19px] font-bold text-[#2B2A26]">
                Petunjuk Arah Singkat
              </h2>
              <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1">
                Dari pusat Kota Karanganyar atau Stasiun Solo Balapan, arahkan kendaraan ke Jalan Raya Tawangmangu. Sekitar 2 kilometer sebelum Pasar Tawangmangu, belok kiri di pertigaan gapura batu bertuliskan &ldquo;Dusun Sumber Asri&rdquo;. Ikuti jalan aspal menanjak sejauh 800 meter hingga terlihat Pendopo Utama dan Area Parkir Desa.
              </p>
            </div>
          </div>
        </section>

        {/* Three Large Action Buttons (56px min height, >= 12px gap) */}
        <section className="space-y-3" aria-label="Tindakan lokasi">
          <a
            href={VILLAGE_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[56px] px-5 rounded-xl bg-[#D9822B] hover:bg-[#C67220] text-[#1F1B16] text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-xs"
          >
            <ExternalLink className="w-5 h-5 shrink-0" strokeWidth={2.4} />
            <span>Buka di Google Maps</span>
          </a>

          <button
            type="button"
            onClick={handleCopyAddress}
            className="w-full min-h-[56px] px-5 rounded-xl bg-white border border-[#D8CEBE] hover:bg-[#F2EADB] text-[#2F6B3F] text-[18px] font-bold flex items-center justify-center gap-2.5"
          >
            {addressCopied ? (
              <>
                <Check className="w-5 h-5 text-[#2F6B3F]" strokeWidth={2.5} />
                <span>Alamat Berhasil Disalin</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 shrink-0" strokeWidth={2.2} />
                <span>Salin alamat</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="w-full min-h-[56px] px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-xs"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Hubungi via WhatsApp</span>
          </button>
        </section>

        {/* Nearby Facilities */}
        <section className="space-y-4">
          <h2 className="font-serif text-[24px] font-bold text-[#2F6B3F]">
            Fasilitas Terdekat di Area Desa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEARBY_FACILITIES.map((facility) => {
              const Icon = FACILITY_ICONS[facility.id] ?? MapPin;
              return (
                <div
                  key={facility.id}
                  className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EAF2E5] text-[#2F6B3F] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={2.3} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] font-bold text-[#2B2A26] leading-snug">
                      {facility.name}
                    </h3>
                    <p className="text-[14px] font-bold text-[#2F6B3F] mt-0.5">
                      {facility.distance}
                    </p>
                    <p className="text-[16px] text-[#4A473F] leading-[1.55] mt-1">
                      {facility.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

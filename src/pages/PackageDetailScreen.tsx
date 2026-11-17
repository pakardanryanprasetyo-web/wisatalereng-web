import {
  ArrowLeft,
  Clock,
  Check,
  X as XIcon,
  Users,
  ShieldAlert,
  Backpack,
} from 'lucide-react';
import { TourPackage, formatRupiah } from '../data/villageData';
import { VillageImage } from '../components/VillageImage';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface PackageDetailScreenProps {
  pkg: TourPackage;
  onBack: () => void;
  onOpenWhatsApp: (pkg: TourPackage) => void;
}

export function PackageDetailScreen({
  pkg,
  onBack,
  onOpenWhatsApp,
}: PackageDetailScreenProps) {
  return (
    <div className="pb-28">
      {/* Back Navigation Strip */}
      <div className="max-w-4xl mx-auto px-4 pt-5 pb-3">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[48px] px-3 -ml-3 inline-flex items-center gap-2 text-[17px] font-bold text-[#2F6B3F] hover:bg-[#EFE7D6] rounded-xl"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.4} />
          <span>Kembali ke Paket Wisata</span>
        </button>
      </div>

      {/* Hero Photo & Title */}
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#D8CEBE] bg-[#E4EBDD]">
          <VillageImage src={pkg.image} alt={pkg.alt} loading="eager" />
        </div>

        <header className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-[16px] font-bold text-[#2F6B3F]">
            <Clock className="w-5 h-5" strokeWidth={2.2} />
            <span>Durasi: {pkg.duration}</span>
          </div>
          <h1 className="font-serif text-[28px] md:text-[34px] font-bold text-[#2B2A26] leading-tight">
            {pkg.name}
          </h1>
          <p className="text-[17px] text-[#4A473F] leading-[1.6]">
            {pkg.summary}
          </p>
        </header>

        {/* Hourly Schedule */}
        <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-[22px] font-bold text-[#2F6B3F]">
            Jadwal Kegiatan
          </h2>
          <ol className="divide-y divide-[#EFE7D6]">
            {pkg.schedule.map((step) => (
              <li key={`${step.time}-${step.activity}`} className="py-3.5 first:pt-0 last:pb-0">
                <p className="text-[15px] font-bold text-[#B86112] tabular-nums">
                  {step.time}
                </p>
                <h3 className="font-serif text-[19px] font-bold text-[#2B2A26] mt-0.5">
                  {step.activity}
                </h3>
                <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Included & Excluded */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs space-y-3">
            <h2 className="font-serif text-[21px] font-bold text-[#2F6B3F]">
              Termasuk dalam Paket
            </h2>
            <ul className="space-y-2.5">
              {pkg.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[17px] text-[#2B2A26] leading-[1.55]"
                >
                  <Check
                    className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1"
                    strokeWidth={2.5}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs space-y-3">
            <h2 className="font-serif text-[21px] font-bold text-[#2B2A26]">
              Tidak Termasuk
            </h2>
            <ul className="space-y-2.5">
              {pkg.excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[17px] text-[#4A473F] leading-[1.55]"
                >
                  <XIcon
                    className="w-5 h-5 text-[#8A5B36] shrink-0 mt-1"
                    strokeWidth={2.3}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Minimal Peserta, Aturan Pembatalan, Apa yang Perlu Dibawa */}
        <div className="space-y-4">
          <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#EAF2E5] text-[#2F6B3F] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" strokeWidth={2.2} />
            </div>
            <div>
              <h2 className="font-serif text-[20px] font-bold text-[#2B2A26]">
                Minimal Peserta
              </h2>
              <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1">
                {pkg.minParticipants}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#FDF0E3] text-[#B86112] flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6" strokeWidth={2.2} />
            </div>
            <div>
              <h2 className="font-serif text-[20px] font-bold text-[#2B2A26]">
                Aturan Pembatalan
              </h2>
              <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1">
                {pkg.cancellationPolicy}
              </p>
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#EAF2E5] text-[#2F6B3F] flex items-center justify-center shrink-0">
                <Backpack className="w-6 h-6" strokeWidth={2.2} />
              </div>
              <h2 className="font-serif text-[20px] font-bold text-[#2B2A26]">
                Apa yang Perlu Dibawa
              </h2>
            </div>
            <ul className="space-y-2 pl-1">
              {pkg.whatToBring.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[17px] text-[#4A473F] leading-[1.6]"
                >
                  <span className="text-[#2F6B3F] font-bold" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Fixed Sticky Bottom CTA Bar (compact height within 15% mobile cap) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-[#FAF5EA]/95 backdrop-blur-sm border-t border-[#D8CEBE] px-4 py-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="shrink-0">
            <span className="block text-[13px] font-semibold text-[#524F47] leading-none">
              Harga mulai
            </span>
            <span className="block text-[20px] sm:text-[22px] font-bold text-[#B86112] tabular-nums leading-tight mt-0.5">
              {formatRupiah(pkg.pricePerPerson)}
              <span className="text-[13px] font-semibold text-[#524F47]"> /org</span>
            </span>
          </div>

          <button
            type="button"
            onClick={() => onOpenWhatsApp(pkg)}
            className="flex-1 sm:flex-none sm:min-w-[260px] min-h-[56px] px-5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Pesan paket ini</span>
          </button>
        </div>
      </div>
    </div>
  );
}

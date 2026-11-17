import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import {
  FAQS,
  PACKAGES,
  PackageDurationFilter,
  TourPackage,
  formatRupiah,
} from '../data/villageData';
import { VillageImage } from '../components/VillageImage';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface PackagesScreenProps {
  onSelectPackageDetail: (pkg: TourPackage) => void;
  onOpenWhatsApp: (pkg?: TourPackage) => void;
}

const DURATION_FILTERS: PackageDurationFilter[] = ['Semua', '1 Hari', '2 Hari 1 Malam'];

export function PackagesScreen({
  onSelectPackageDetail,
  onOpenWhatsApp,
}: PackagesScreenProps) {
  const [filter, setFilter] = useState<PackageDurationFilter>('Semua');
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const filteredPackages =
    filter === 'Semua' ? PACKAGES : PACKAGES.filter((p) => p.duration === filter);

  return (
    <div className="py-8 md:py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Page Title & Duration Filter */}
        <header className="space-y-4">
          <div>
            <h1 className="font-serif text-[28px] md:text-[34px] font-bold text-[#2F6B3F] leading-tight">
              Paket Wisata Lereng Asri
            </h1>
            <p className="text-[17px] text-[#4A473F] mt-2 leading-[1.6]">
              Pilih paket wisata yang sesuai dengan waktu luang Anda. Semua harga sudah jelas di awal tanpa biaya tersembunyi.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-3"
            role="group"
            aria-label="Penyaring durasi paket wisata"
          >
            {DURATION_FILTERS.map((item) => {
              const active = filter === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`min-h-[48px] px-5 rounded-xl text-[16px] font-bold whitespace-nowrap shrink-0 transition-colors ${
                    active
                      ? 'bg-[#2F6B3F] text-white'
                      : 'bg-white text-[#2B2A26] border border-[#D8CEBE] hover:bg-[#F2EADB]'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </header>

        {/* Single-Column Package Cards */}
        <section className="space-y-6" aria-label="Daftar paket wisata">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-white rounded-2xl border border-[#D8CEBE] overflow-hidden shadow-xs"
            >
              <button
                type="button"
                onClick={() => onSelectPackageDetail(pkg)}
                className="w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E4EBDD] block text-left"
                aria-label={`Lihat rincian ${pkg.name}`}
              >
                <VillageImage src={pkg.image} alt={pkg.alt} />
              </button>

              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <p className="text-[15px] font-bold text-[#2F6B3F]">
                    Durasi: {pkg.duration}
                  </p>
                  <h2 className="font-serif text-[23px] font-bold text-[#2B2A26] leading-snug mt-1">
                    {pkg.name}
                  </h2>
                  <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1.5">
                    {pkg.summary}
                  </p>
                </div>

                <p className="text-[26px] font-bold text-[#B86112] tabular-nums leading-tight">
                  {formatRupiah(pkg.pricePerPerson)}{' '}
                  <span className="text-[16px] font-semibold text-[#524F47]">
                    per orang
                  </span>
                </p>

                <div className="pt-3 border-t border-[#E6DFD1]">
                  <p className="text-[16px] font-bold text-[#2B2A26] mb-2">
                    Termasuk:
                  </p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-[17px] text-[#2B2A26] leading-snug"
                      >
                        <Check
                          className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1"
                          strokeWidth={2.5}
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="button"
                    onClick={() => onOpenWhatsApp(pkg)}
                    className="w-full min-h-[56px] px-5 rounded-xl bg-[#D9822B] hover:bg-[#C67220] text-[#1F1B16] text-[18px] font-bold flex items-center justify-center gap-2.5 active:scale-[0.99]"
                  >
                    <WhatsAppIcon className="w-5 h-5 shrink-0" />
                    <span>Pesan paket ini</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPackageDetail(pkg)}
                    className="w-full min-h-[56px] px-5 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] hover:bg-[#EFE7D6] text-[#2F6B3F] text-[18px] font-bold flex items-center justify-center"
                  >
                    Lihat Jadwal &amp; Rincian
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Simple Comparison Table */}
        <section className="space-y-4">
          <h2 className="font-serif text-[24px] font-bold text-[#2F6B3F]">
            Perbandingan Singkat Antar Paket
          </h2>
          <div className="bg-white rounded-2xl border border-[#D8CEBE] overflow-x-auto shadow-xs">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#EAF2E5] text-[#2F6B3F] border-b border-[#D8CEBE]">
                  <th className="py-3.5 px-4 font-serif text-[16px] font-bold">
                    Nama Paket
                  </th>
                  <th className="py-3.5 px-4 font-serif text-[16px] font-bold">
                    Durasi
                  </th>
                  <th className="py-3.5 px-4 font-serif text-[16px] font-bold">
                    Makan
                  </th>
                  <th className="py-3.5 px-4 font-serif text-[16px] font-bold">
                    Penginapan
                  </th>
                  <th className="py-3.5 px-4 font-serif text-[16px] font-bold text-right">
                    Harga / Orang
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6DFD1] text-[16px]">
                {PACKAGES.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-[#FAF5EA]/70">
                    <td className="py-3.5 px-4 font-bold text-[#2B2A26]">
                      <button
                        type="button"
                        onClick={() => onSelectPackageDetail(pkg)}
                        className="text-left hover:text-[#2F6B3F] underline-offset-4 hover:underline min-h-[44px]"
                      >
                        {pkg.name}
                      </button>
                    </td>
                    <td className="py-3.5 px-4 text-[#4A473F]">{pkg.duration}</td>
                    <td className="py-3.5 px-4 text-[#4A473F]">{pkg.mealsLabel}</td>
                    <td className="py-3.5 px-4 text-[#4A473F]">{pkg.stayLabel}</td>
                    <td className="py-3.5 px-4 font-bold text-[#B86112] text-right tabular-nums whitespace-nowrap">
                      {formatRupiah(pkg.pricePerPerson)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="font-serif text-[24px] font-bold text-[#2F6B3F]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#D8CEBE] overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[56px] px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF5EA]/60"
                  >
                    <span className="font-serif text-[18px] font-bold text-[#2B2A26] leading-snug">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-[#2F6B3F] shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#2F6B3F] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[17px] text-[#4A473F] leading-[1.6] border-t border-[#F0EAE0]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

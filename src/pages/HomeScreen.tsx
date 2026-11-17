import { useRef } from 'react';
import {
  Wind,
  Utensils,
  Users,
  Check,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import {
  DESTINATIONS,
  GALLERY_PHOTOS,
  HERO_IMAGE,
  PACKAGES,
  ScreenId,
  TourPackage,
  VILLAGE_CONTACT,
  formatRupiah,
} from '../data/villageData';
import { VillageImage } from '../components/VillageImage';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { VillageMap } from '../components/VillageMap';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectPackageDetail: (pkg: TourPackage) => void;
  onOpenWhatsApp: (pkg?: TourPackage) => void;
  onOpenPhoto: (photoIndex: number) => void;
}

const WHY_ITEMS = [
  {
    id: 'udara',
    title: 'Udara Sejuk Pegunungan',
    description:
      'Dikelilingi bukit hijau dan pepohonan rimbun pada ketinggian sejuk 18–22°C sepanjang hari.',
    Icon: Wind,
  },
  {
    id: 'budaya',
    title: 'Budaya & Kuliner Desa',
    description:
      'Nikmati masakan dapur tungku kayu, bancakan daun pisang, dan belajar bertani bersama warga.',
    Icon: Utensils,
  },
  {
    id: 'pemandu',
    title: 'Dipandu Warga Setempat',
    description:
      'Setiap perjalanan ditemani pemandu asli desa yang ramah, hafal jalur aman, dan penuh cerita.',
    Icon: Users,
  },
];

export function HomeScreen({
  onNavigate,
  onSelectPackageDetail,
  onOpenWhatsApp,
  onOpenPhoto,
}: HomeScreenProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const homeGallery = GALLERY_PHOTOS.slice(0, 6);
  const popularPackages = PACKAGES.slice(0, 3);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const distance = direction === 'left' ? -320 : 320;
    carouselRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  return (
    <div>
      {/* 2. Foto Utama Selebar Layar (Hero) */}
      <section className="relative w-full min-h-[540px] md:min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <VillageImage
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#162419]/90 via-[#162419]/55 to-[#162419]/30"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="max-w-2xl space-y-4">
            <h1 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white leading-[1.22] tracking-tight">
              Selamat Datang di Desa Wisata Lereng Asri
            </h1>
            <p className="text-[17px] sm:text-[18px] text-[#F5F2EA] leading-[1.6] max-w-xl">
              Rasakan ketenangan lereng hijau berkabut, sawah berundak, dan hangatnya sambutan warga desa bersama keluarga maupun rombongan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="w-full sm:w-auto min-h-[56px] px-7 rounded-xl bg-[#D9822B] hover:bg-[#C67220] text-[#1F1B16] text-[18px] font-bold flex items-center justify-center shadow-sm active:scale-[0.98]"
              >
                Lihat Paket Wisata
              </button>
              <button
                type="button"
                onClick={() => onOpenWhatsApp()}
                className="w-full sm:w-auto min-h-[56px] px-7 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Pesan lewat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bagian "Kenapa Lereng Asri" */}
      <section className="bg-[#8DB580]/25 border-b border-[#D8CEBE] py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-[#2F6B3F] mb-6">
            Kenapa Lereng Asri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY_ITEMS.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="bg-white rounded-2xl border border-[#D8CEBE] p-5 shadow-xs flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF2E5] text-[#2F6B3F] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={2.4} />
                </div>
                <div>
                  <h3 className="font-serif text-[19px] font-bold text-[#2B2A26] leading-snug">
                    {title}
                  </h3>
                  <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Destinasi Pilihan" (Horizontal Scroll / Swipe Cards) */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-[#2F6B3F]">
                Destinasi Pilihan
              </h2>
              <p className="text-[17px] text-[#4A473F] mt-1">
                Geser ke samping untuk melihat sudut favorit warga dan tamu kami.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollCarousel('left')}
                aria-label="Geser destinasi ke kiri"
                className="w-12 h-12 rounded-xl bg-white border border-[#D8CEBE] text-[#2B2A26] flex items-center justify-center hover:bg-[#F2EADB]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel('right')}
                aria-label="Geser destinasi ke kanan"
                className="w-12 h-12 rounded-xl bg-white border border-[#D8CEBE] text-[#2B2A26] flex items-center justify-center hover:bg-[#F2EADB]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
          >
            {DESTINATIONS.map((dest) => (
              <article
                key={dest.id}
                onClick={() => onNavigate('gallery')}
                className="w-[82%] sm:w-[300px] md:w-[310px] shrink-0 snap-start bg-white rounded-2xl border border-[#D8CEBE] overflow-hidden shadow-xs cursor-pointer hover:border-[#8DB580] transition-colors flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#E4EBDD]">
                  <VillageImage src={dest.image} alt={dest.alt} />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between gap-2">
                  <div>
                    <p className="text-[14px] font-bold text-[#2F6B3F] mb-1">
                      {dest.audienceLabel}
                    </p>
                    <h3 className="font-serif text-[20px] font-bold text-[#2B2A26] leading-snug">
                      {dest.name}
                    </h3>
                    <p className="text-[17px] text-[#4A473F] leading-[1.6] mt-1.5">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="min-h-[48px] inline-flex items-center gap-2 text-[17px] font-bold text-[#2F6B3F] hover:underline underline-offset-4"
            >
              <span>Lihat semua destinasi</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.3} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. "Paket Populer" */}
      <section className="bg-[#F2EADB]/70 border-y border-[#D8CEBE] py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-[#2F6B3F]">
                Paket Populer
              </h2>
              <p className="text-[17px] text-[#4A473F] mt-1">
                Pilihan perjalanan yang paling sering dipesan keluarga dan rombongan.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('packages')}
              className="min-h-[48px] inline-flex items-center gap-2 text-[17px] font-bold text-[#2F6B3F] hover:underline underline-offset-4 self-start sm:self-auto"
            >
              <span>Lihat semua paket</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.3} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="bg-white rounded-2xl border border-[#D8CEBE] overflow-hidden shadow-xs flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => onSelectPackageDetail(pkg)}
                  className="aspect-[4/3] w-full overflow-hidden bg-[#E4EBDD] text-left focus:outline-2 focus:outline-[#2F6B3F]"
                  aria-label={`Lihat rincian ${pkg.name}`}
                >
                  <VillageImage src={pkg.image} alt={pkg.alt} />
                </button>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <p className="text-[15px] font-bold text-[#2F6B3F]">
                      Durasi: {pkg.duration}
                    </p>
                    <h3 className="font-serif text-[21px] font-bold text-[#2B2A26] leading-snug mt-1">
                      <button
                        type="button"
                        onClick={() => onSelectPackageDetail(pkg)}
                        className="text-left hover:text-[#2F6B3F] transition-colors"
                      >
                        {pkg.name}
                      </button>
                    </h3>

                    <p className="text-[24px] font-bold text-[#B86112] mt-2 tabular-nums leading-tight">
                      {formatRupiah(pkg.pricePerPerson)}{' '}
                      <span className="text-[16px] font-semibold text-[#524F47]">
                        per orang
                      </span>
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#E6DFD1]">
                      <p className="text-[15px] font-bold text-[#2B2A26] mb-2">
                        Termasuk:
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.highlights.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-[16px] text-[#2B2A26] leading-snug"
                          >
                            <Check
                              className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5"
                              strokeWidth={2.5}
                            />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenWhatsApp(pkg)}
                      className="w-full min-h-[56px] px-5 rounded-xl bg-[#D9822B] hover:bg-[#C67220] text-[#1F1B16] text-[18px] font-bold flex items-center justify-center active:scale-[0.98]"
                    >
                      Pesan
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectPackageDetail(pkg)}
                      className="w-full min-h-[48px] px-4 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] hover:bg-[#EFE7D6] text-[#2F6B3F] text-[16px] font-bold flex items-center justify-center"
                    >
                      Lihat Jadwal Lengkap
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Galeri" (Kisi 2 Kolom, 6 Foto) */}
      <section className="py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-[#2F6B3F]">
            Galeri Suasana Desa
          </h2>
          <p className="text-[17px] text-[#4A473F] mt-1 mb-5">
            Potret keseharian warga, sawah berundak, dan hidangan hangat di Lereng Asri.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {homeGallery.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => onOpenPhoto(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#D8CEBE] bg-[#E4EBDD] text-left focus-visible:outline-2 focus-visible:outline-[#2F6B3F]"
                aria-label={`Perbesar foto: ${photo.caption}`}
              >
                <VillageImage
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                />
              </button>
            ))}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="min-h-[48px] inline-flex items-center gap-2 text-[17px] font-bold text-[#2F6B3F] hover:underline underline-offset-4"
            >
              <span>Lihat semua foto</span>
              <ArrowRight className="w-5 h-5" strokeWidth={2.3} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. "Cara Menuju Desa" */}
      <section className="bg-[#8DB580]/20 border-t border-[#D8CEBE] py-10 md:py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <VillageMap heightClass="h-[260px] md:h-[320px]" />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-serif text-[26px] md:text-[30px] font-bold text-[#2F6B3F]">
              Cara Menuju Desa
            </h2>
            <p className="text-[17px] text-[#2B2A26] leading-[1.6]">
              Jalan menuju Desa Wisata Lereng Asri sudah beraspal mulus dan mudah dijangkau kendaraan pribadi maupun bus wisata ukuran medium, sekitar 45 menit dari pusat Kota Karanganyar.
            </p>
            <div className="flex items-start gap-2.5 text-[16px] text-[#4A473F]">
              <MapPin className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1" strokeWidth={2.2} />
              <span>{VILLAGE_CONTACT.address}</span>
            </div>

            <div className="space-y-3 pt-1">
              <a
                href={VILLAGE_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[56px] px-5 rounded-xl bg-[#D9822B] hover:bg-[#C67220] text-[#1F1B16] text-[18px] font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-5 h-5 shrink-0" strokeWidth={2.3} />
              </a>
              <button
                type="button"
                onClick={() => onNavigate('location')}
                className="w-full min-h-[56px] px-5 rounded-xl bg-white border border-[#D8CEBE] hover:bg-[#FAF5EA] text-[#2F6B3F] text-[18px] font-bold flex items-center justify-center"
              >
                Lihat Petunjuk &amp; Fasilitas Lengkap
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ajakan Penutup Berlatar Hijau Tua */}
      <section className="bg-[#2F6B3F] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-serif text-[26px] md:text-[32px] font-bold text-white leading-snug">
            Ingin Bertanya atau Memesan Jadwal Kunjungan?
          </h2>
          <p className="text-[17px] md:text-[18px] text-[#EEF3EB] leading-[1.6]">
            Jangan sungkan menyapa pengurus kami. Ceritakan tanggal rencana Anda dan jumlah peserta, kami siap membantu menyiapkan kunjungan terbaik untuk keluarga dan rombongan.
          </p>
          <div className="pt-1 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => onOpenWhatsApp()}
              className="w-full min-h-[56px] px-6 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0" />
              <span>Hubungi Kami lewat WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

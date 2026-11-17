export type ScreenId = 'home' | 'packages' | 'package-detail' | 'gallery' | 'location';

export type PackageDurationFilter = 'Semua' | '1 Hari' | '2 Hari 1 Malam';
export type GalleryCategory = 'Semua' | 'Pemandangan' | 'Kegiatan' | 'Kuliner' | 'Penginapan';

export interface DestinationItem {
  id: string;
  name: string;
  description: string;
  audienceLabel: string;
  image: string;
  alt: string;
  galleryCategory: Exclude<GalleryCategory, 'Semua'>;
}

export interface ScheduleStep {
  time: string;
  activity: string;
  detail: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: Exclude<PackageDurationFilter, 'Semua'>;
  pricePerPerson: number;
  summary: string;
  image: string;
  alt: string;
  highlights: [string, string, string];
  minParticipants: string;
  mealsLabel: string;
  stayLabel: string;
  guideLabel: string;
  schedule: ScheduleStep[];
  included: string[];
  excluded: string[];
  cancellationPolicy: string;
  whatToBring: string[];
}

export interface GalleryPhoto {
  id: string;
  image: string;
  alt: string;
  caption: string;
  location: string;
  category: Exclude<GalleryCategory, 'Semua'>;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FacilityItem {
  id: string;
  name: string;
  distance: string;
  description: string;
}

export const VILLAGE_CONTACT = {
  brandName: 'Lereng Asri',
  fullName: 'Desa Wisata Lereng Asri',
  whatsappNumber: '6281234567890',
  whatsappDisplay: '0812-3456-7890',
  replyHours: 'Setiap hari, pukul 07.00 – 21.00 WIB',
  address:
    'Dusun Sumber Asri RT 04/RW 02, Desa Lereng Asri, Kecamatan Tawangmangu, Kabupaten Karanganyar, Jawa Tengah 57792',
  shortAddress: 'Dusun Sumber Asri, Kec. Tawangmangu, Karanganyar, Jawa Tengah',
  coordinates: { lat: -7.6638, lng: 111.1325 },
  googleMapsUrl: 'https://maps.google.com/?q=-7.6638,111.1325',
};

export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${VILLAGE_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_lereng_asri_1794887300386.jpg',
  alt: 'Pemandangan lanskap lereng hijau Desa Wisata Lereng Asri yang berkabut tipis dengan cahaya matahari pagi',
};

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'sawah-terasering',
    name: 'Sawah Terasering Pagi',
    description: 'Jalan santai menyusuri pematang sawah berundak yang hijau dengan gubuk bambu tempat beristirahat.',
    audienceLabel: 'Cocok untuk keluarga',
    image: '/src/assets/images/sawah_berundak_1794887300246.jpg',
    alt: 'Hamparan sawah terasering hijau dan gubuk bambu di Desa Wisata Lereng Asri',
    galleryCategory: 'Pemandangan',
  },
  {
    id: 'kebun-organik',
    name: 'Kebun Sayur & Kopi Warga',
    description: 'Belajar memetik sayuran segar dan biji kopi lereng gunung langsung bersama petani desa.',
    audienceLabel: 'Ramah anak & lansia',
    image: '/src/assets/images/kebun_warga_desa_1794887301238.jpg',
    alt: 'Warga desa tersenyum merawat kebun sayur organik dan tanaman kopi di lereng pegunungan',
    galleryCategory: 'Kegiatan',
  },
  {
    id: 'dapur-tungku',
    name: 'Dapur Tungku Tradisional',
    description: 'Melihat proses memasak lauk desa di atas tungku kayu bakar yang hangat dan wangi asap alami.',
    audienceLabel: 'Pas untuk rombongan',
    image: '/src/assets/images/dapur_tradisional_desa_1794887302444.jpg',
    alt: 'Ibu warga desa tersenyum memasak di dapur tradisional berdinding anyaman bambu',
    galleryCategory: 'Kuliner',
  },
  {
    id: 'curug-lereng',
    name: 'Curug Embun Lereng',
    description: 'Air terjun jernih di balik rimbunnya hutan pakis dengan jembatan bambu yang mudah dilalui.',
    audienceLabel: 'Favorit anak muda',
    image: '/src/assets/images/curug_lereng_hutan_1794887303903.jpg',
    alt: 'Air terjun jernih di hutan desa dengan jembatan bambu dan bebatuan berlumut',
    galleryCategory: 'Pemandangan',
  },
];

export const PACKAGES: TourPackage[] = [
  {
    id: 'jelajah-sawah-kebun',
    name: 'Jelajah Sawah & Kebun Kopi',
    duration: '1 Hari',
    pricePerPerson: 125000,
    summary:
      'Jalan pagi menyusuri sawah berundak, mampir ke kebun kopi warga, dan menikmati makan siang hangat.',
    image: '/src/assets/images/trekking_keluarga_desa_1794887303858.jpg',
    alt: 'Wisatawan keluarga dan anak muda berjalan santai bersama pemandu lokal di jalur kebun desa',
    highlights: [
      'Pemandu warga desa yang ramah',
      'Minum kopi lereng & camilan pagi',
      'Makan siang nasi liwet di saung',
    ],
    minParticipants: 'Minimal 2 orang (keluarga atau rombongan kecil)',
    mealsLabel: '1x Makan siang & wedang',
    stayLabel: 'Tanpa menginap',
    guideLabel: 'Pemandu lokal desa',
    schedule: [
      {
        time: '07.30 WIB',
        activity: 'Penyambutan di Pendopo Desa',
        detail: 'Menikmati teh hangat dan jajanan pasar sambil perkenalan singkat rute jalan.',
      },
      {
        time: '08.15 WIB',
        activity: 'Jalan Santai Menyusuri Sawah Terasering',
        detail: 'Berjalan di jalur batu yang aman sambil berfoto di gubuk bambu dengan latar kabut pagi.',
      },
      {
        time: '10.00 WIB',
        activity: 'Petik Sayur & Mengenal Kopi Lereng',
        detail: 'Melihat kebun organik milik warga dan mencoba menyangrai biji kopi secara tradisional.',
      },
      {
        time: '12.00 WIB',
        activity: 'Makan Siang Bancakan di Saung',
        detail: 'Santap bersama nasi liwet, ikan bakar, tempe goreng hangat, lalapan segar, dan sambal.',
      },
      {
        time: '14.00 WIB',
        activity: 'Kunjungan ke Curug Embun & Selesai',
        detail: 'Bermain air di sungai jernih sebelum kembali ke pendopo dan membawa hasil kebun.',
      },
    ],
    included: [
      'Pemandu wisata asli warga Desa Lereng Asri',
      'Minuman selamat datang dan camilan tradisional pagi',
      '1 kali makan siang menu desa lengkap',
      'Tiket masuk kawasan sawah dan Curug Embun',
      '1 ikat sayuran segar hasil kebun untuk dibawa pulang',
    ],
    excluded: [
      'Transportasi menuju dan dari Desa Lereng Asri',
      'Belanja oleh-oleh pribadi di warung warga',
      'Dokumentasi kamera profesional (bisa dipesan terpisah)',
    ],
    cancellationPolicy:
      'Pembatalan maksimal 3 hari sebelum tanggal kunjungan mendapat pengembalian penuh 100%, atau bebas menjadwal ulang tanpa biaya tambahan.',
    whatToBring: [
      'Sepatu atau sandal gunung yang tidak licin',
      'Jaket tipis karena udara pagi sekitar 18–20°C',
      'Topi atau pelindung matahari untuk siang hari',
      'Botol minum pribadi dan pakaian ganti bila ingin bermain air di curug',
    ],
  },
  {
    id: 'masak-dapur-bancakan',
    name: 'Masak Dapur Desa & Bancakan',
    duration: '1 Hari',
    pricePerPerson: 165000,
    summary:
      'Pengalaman akrab memasak di dapur tungku bersama ibu-ibu desa, mulai dari memetik bahan sampai makan bersama.',
    image: '/src/assets/images/dapur_tradisional_desa_1794887302444.jpg',
    alt: 'Kegiatan memasak di dapur tradisional tungku kayu Desa Wisata Lereng Asri',
    highlights: [
      'Belajar masak di tungku kayu bakar',
      'Memetik sayur segar dari kebun desa',
      'Makan bancakan beralas daun pisang',
    ],
    minParticipants: 'Minimal 4 orang (cocok untuk keluarga besar atau teman kantor)',
    mealsLabel: '1x Masak & makan bancakan',
    stayLabel: 'Tanpa menginap',
    guideLabel: 'Ibu dapur & pemandu kebun',
    schedule: [
      {
        time: '08.00 WIB',
        activity: 'Sambutan Hangat & Wedang Jahe',
        detail: 'Berkumpul di dapur warga dan mengenakan celemek kain batik sederhana.',
      },
      {
        time: '08.45 WIB',
        activity: 'Panen Bahan Masakan di Kebun',
        detail: 'Memetik daun singkong, cabai, tomat, dan serai langsung dari pekarangan.',
      },
      {
        time: '10.00 WIB',
        activity: 'Memasak Bersama di Dapur Tungku',
        detail: 'Mengulek bumbu, menanak nasi liwet di kendil, dan membakar ikan air tawar.',
      },
      {
        time: '12.15 WIB',
        activity: 'Makan Bancakan di Atas Daun Pisang',
        detail: 'Menikmati seluruh hidangan hangat bersama di teras kayu menghadap sawah.',
      },
      {
        time: '14.30 WIB',
        activity: 'Seduh Kopi Sore & Penutup',
        detail: 'Obrolan santai sore ditemani pisang goreng dan resep masakan desa untuk dibawa pulang.',
      },
    ],
    included: [
      'Seluruh bahan masakan segar dari kebun desa',
      'Pendampingan langsung ibu-ibu juru masak desa',
      'Minuman hangat pagi dan sore serta camilan desa',
      'Makan siang bancakan porsi penuh',
      'Buku saku resep masakan tradisional Lereng Asri',
    ],
    excluded: [
      'Transportasi menuju lokasi desa',
      'Tambahan lauk khusus di luar menu paket',
      'Pengeluaran pribadi di warung warga',
    ],
    cancellationPolicy:
      'Pembatalan hingga 3 hari sebelum hari-H dapat diganti tanggal atau uang muka kembali penuh. Pembatalan H-1 dikenakan potongan 25% untuk belanja bahan segar.',
    whatToBring: [
      'Pakaian santai yang nyaman dan mudah dicuci',
      'Ikat rambut bagi peserta berambut panjang',
      'Alas kaki yang nyaman untuk berjalan ke kebun',
      'Wadah makanan bila ingin membungkus sisa masakan',
    ],
  },
  {
    id: 'menginap-asri-lereng',
    name: 'Menginap Asri Lereng Gunung',
    duration: '2 Hari 1 Malam',
    pricePerPerson: 385000,
    summary:
      'Bermalam di rumah kayu warga yang bersih dan tenang, merasakan suasana pagi berkabut serta keseharian desa.',
    image: '/src/assets/images/homestay_kayu_asri_1794887303200.jpg',
    alt: 'Penginapan rumah kayu tradisional yang bersih dan asri dikelilingi tanaman hijau',
    highlights: [
      'Menginap 1 malam di rumah kayu warga',
      'Makan 3 kali masakan rumahan hangat',
      'Jalan pagi melihat kabut & curug',
    ],
    minParticipants: 'Minimal 2 orang (kamar keluarga tersedia hingga 6 orang)',
    mealsLabel: '3x Makan & 2x kudapan',
    stayLabel: '1 Malam di Homestay',
    guideLabel: 'Tuan rumah & pemandu desa',
    schedule: [
      {
        time: 'Hari 1 · 13.30 WIB',
        activity: 'Check-in Homestay & Teh Sambutan',
        detail: 'Istirahat sejenak di beranda rumah kayu sambil menikmati udara sejuk lereng.',
      },
      {
        time: 'Hari 1 · 15.30 WIB',
        activity: 'Jalan Sore ke Kebun & Pengrajin Bambu',
        detail: 'Mengunjungi kebun teh warga dan melihat cara menganyam besek bambu.',
      },
      {
        time: 'Hari 1 · 19.00 WIB',
        activity: 'Makan Malam Hangat & Api Unggun Kecil',
        detail: 'Santap malam sayur lodeh, ayam kampung goreng, lalu minum ronde jahe di halaman.',
      },
      {
        time: 'Hari 2 · 06.30 WIB',
        activity: 'Menikmati Kabut Pagi & Sarapan',
        detail: 'Bangun dengan suara burung desa, sarapan nasi goreng kampung dan teh panas.',
      },
      {
        time: 'Hari 2 · 08.30 WIB',
        activity: 'Trekking Ringan ke Sawah & Curug Embun',
        detail: 'Jalan pagi dipandu tuan rumah sebelum kembali bersiap pulang pukul 12.00 WIB.',
      },
    ],
    included: [
      '1 malam menginap di homestay rumah kayu (kasur nyaman, selimut tebal, air hangat)',
      '3 kali makan utama (malam, sarapan, makan siang hari kedua)',
      '2 kali suguhan wedang hangat dan jajanan pasar',
      'Pemandu jalan pagi ke sawah terasering dan Curug Embun',
      'Parkir aman di halaman pendopo desa',
    ],
    excluded: [
      'Transportasi pulang-pergi ke desa',
      'Keperluan mandi pribadi tertentu (handuk dan sabun standar sudah tersedia)',
      'Pembelian kopi bubuk atau oleh-oleh kerajinan warga',
    ],
    cancellationPolicy:
      'Pembatalan minimal 5 hari sebelum menginap mendapat pengembalian penuh, atau dapat diganti ke tanggal lain dalam 3 bulan.',
    whatToBring: [
      'Jaket hangat dan kaus kaki untuk malam hari (suhu bisa turun hingga 16°C)',
      'Sepatu jalan atau sandal yang nyaman untuk trekking pagi',
      'Obat-obatan pribadi bila diperlukan',
      'Kartu identitas (KTP/SIM) untuk pendataan tamu homestay',
    ],
  },
  {
    id: 'kemah-keluarga-curug',
    name: 'Jelajah Keluarga & Malam Desa',
    duration: '2 Hari 1 Malam',
    pricePerPerson: 450000,
    summary:
      'Paket lengkap dua hari khusus keluarga dan rombongan dengan aktivitas belajar tanam padi, masak, dan malam keakraban.',
    image: '/src/assets/images/sawah_berundak_1794887300246.jpg',
    alt: 'Lanskap sawah terasering hijau untuk paket jelajah keluarga 2 hari 1 malam',
    highlights: [
      'Homestay keluarga + aula kumpul luas',
      'Aktivitas anak tanam padi & tangkap ikan',
      'Makan 4 kali termasuk bakar jagung',
    ],
    minParticipants: 'Minimal 6 orang (ideal untuk keluarga besar atau komunitas)',
    mealsLabel: '4x Makan & bakar jagung',
    stayLabel: '1 Malam Homestay Keluarga',
    guideLabel: '2 Pemandu khusus rombongan',
    schedule: [
      {
        time: 'Hari 1 · 10.00 WIB',
        activity: 'Tiba di Pendopo & Persiapan Kamar',
        detail: 'Sambutan musik bambu ringan dan pembagian kamar homestay berdekatan.',
      },
      {
        time: 'Hari 1 · 13.30 WIB',
        activity: 'Belajar Tanam Padi & Tangkap Ikan Anak',
        detail: 'Anak-anak dan orang tua mencoba menanam bibit padi di petak sawah khusus yang dangkal.',
      },
      {
        time: 'Hari 1 · 19.30 WIB',
        activity: 'Makan Malam Bancakan & Bakar Jagung',
        detail: 'Makan malam bersama di pendopo dilanjutkan bakar jagung manis dan singkong keju.',
      },
      {
        time: 'Hari 2 · 07.30 WIB',
        activity: 'Jalan Pagi ke Kebun & Curug Embun',
        detail: 'Berjalan santai bersama dua pemandu yang menjaga keamanan jalur anak dan lansia.',
      },
      {
        time: 'Hari 2 · 12.30 WIB',
        activity: 'Makan Siang Penutup & Oleh-Oleh',
        detail: 'Santap siang hangat dan pembagian tas sayuran segar sebelum perjalanan pulang.',
      },
    ],
    included: [
      'Penginapan 1 malam di homestay keluarga yang bersih dan berdekatan',
      '4 kali makan menu rumahan bergizi untuk dewasa dan anak-anak',
      'Seluruh peralatan aktivitas sawah, tangkap ikan, dan kelas kecil',
      '2 orang pemandu berpengalaman mendampingi rombongan',
      'Dokumentasi foto kegiatan rombongan selama di desa',
    ],
    excluded: [
      'Transportasi rombongan menuju desa',
      'Asuransi perjalanan pribadi',
      'Tambahan pesanan menu khusus di luar paket',
    ],
    cancellationPolicy:
      'Uang muka sebesar 30% dapat dijadwal ulang gratis jika cuaca ekstrem atau konfirmasi maksimal 5 hari sebelum kedatangan.',
    whatToBring: [
      '2 pasang pakaian ganti (terutama untuk aktivitas sawah anak-anak)',
      'Jaket tebal untuk malam dan pagi hari',
      'Sandal jepit untuk ke sawah dan sepatu untuk trekking curug',
      'Handuk ekstra dan kantong plastik untuk baju basah',
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    image: '/src/assets/images/hero_lereng_asri_1794887300386.jpg',
    alt: 'Kabut pagi menyelimuti perbukitan hijau Desa Wisata Lereng Asri',
    caption: 'Kabut tipis menyapa lereng desa setiap pukul enam pagi.',
    location: 'Bukit Pandang Timur',
    category: 'Pemandangan',
  },
  {
    id: 'gal-2',
    image: '/src/assets/images/sawah_berundak_1794887300246.jpg',
    alt: 'Sawah berundak hijau dan gubuk bambu di Lereng Asri',
    caption: 'Sawah terasering hijau dengan saung bambu untuk melepas lelah.',
    location: 'Blok Sawah Sumber Asri',
    category: 'Pemandangan',
  },
  {
    id: 'gal-3',
    image: '/src/assets/images/kebun_warga_desa_1794887301238.jpg',
    alt: 'Petani desa tersenyum memanen sayuran segar dan kopi',
    caption: 'Pak Darman dan Bu Sari memetik sayuran organik pagi hari.',
    location: 'Kebun Lereng Atas',
    category: 'Kegiatan',
  },
  {
    id: 'gal-4',
    image: '/src/assets/images/trekking_keluarga_desa_1794887303858.jpg',
    alt: 'Keluarga dan anak muda berjalan santai di jalur kebun desa',
    caption: 'Jalur jalan kaki yang landai dan ramah untuk anak-anak maupun orang tua.',
    location: 'Jalur Setapak Kebun Teh',
    category: 'Kegiatan',
  },
  {
    id: 'gal-5',
    image: '/src/assets/images/dapur_tradisional_desa_1794887302444.jpg',
    alt: 'Ibu warga memasak di dapur tungku tradisional',
    caption: 'Masakan dimasak perlahan di tungku kayu oleh ibu-ibu desa.',
    location: 'Dapur Warga Bu Minah',
    category: 'Kuliner',
  },
  {
    id: 'gal-6',
    image: '/src/assets/images/kuliner_bancakan_desa_1794887302043.jpg',
    alt: 'Hidangan nasi liwet, ikan bakar, tempe, dan wedang jahe di atas daun pisang',
    caption: 'Nasi liwet hangat, ikan bakar, lalapan kebun, dan wedang jahe.',
    location: 'Pendopo Makan Desa',
    category: 'Kuliner',
  },
  {
    id: 'gal-7',
    image: '/src/assets/images/homestay_kayu_asri_1794887303200.jpg',
    alt: 'Rumah kayu penginapan homestay warga yang bersih dan asri',
    caption: 'Beranda homestay kayu yang tenang dengan udara pegunungan sejuk.',
    location: 'Homestay Griya Kenuning',
    category: 'Penginapan',
  },
  {
    id: 'gal-8',
    image: '/src/assets/images/curug_lereng_hutan_1794887303903.jpg',
    alt: 'Air terjun jernih di hutan desa dan jembatan bambu',
    caption: 'Jembatan bambu menuju Curug Embun yang airnya jernih dan segar.',
    location: 'Curug Embun Lereng',
    category: 'Pemandangan',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'cara-bayar',
    question: 'Bagaimana cara bayar dan konfirmasi pemesanan paket?',
    answer:
      'Setelah memilih paket dan menghubungi kami lewat WhatsApp, Anda cukup mengirim uang muka (DP) sebesar 30% melalui transfer bank atau QRIS resmi pengurus desa. Sisa pembayaran dapat dilunasi saat tiba di pendopo desa.',
  },
  {
    id: 'potongan-anak',
    question: 'Apakah ada potongan harga untuk anak-anak?',
    answer:
      'Ya, anak usia di bawah 4 tahun gratis (tanpa tempat tidur tambahan). Untuk anak usia 4–10 tahun mendapat potongan 30% dari harga paket dewasa, sudah termasuk porsi makan ramah anak dan seluruh aktivitas.',
  },
  {
    id: 'kalau-hujan',
    question: 'Bagaimana kalau saat hari kunjungan turun hujan?',
    answer:
      'Jika gerimis ringan, kami menyediakan jas hujan ponco dan caping bambu secara gratis. Apabila hujan deras tidak memungkinkan kegiatan luar ruang, kegiatan akan dialihkan ke saung pendopo (memasak di dapur tungku, meracik wedang, atau menganyam bambu), atau Anda bebas memilih jadwal ulang tanpa denda.',
  },
  {
    id: 'rombongan-besar',
    question: 'Bisakah memesan untuk rombongan kantor atau sekolah?',
    answer:
      'Tentu bisa. Pendopo dan homestay warga kami mampu menampung hingga 60 orang sekaligus. Untuk rombongan di atas 15 orang, silakan hubungi kami via WhatsApp agar jadwal dan menu dapat disesuaikan.',
  },
];

export const NEARBY_FACILITIES: FacilityItem[] = [
  {
    id: 'parkir',
    name: 'Area Parkir Luas & Aman',
    distance: '50 meter dari Pendopo',
    description: 'Muat hingga 25 mobil keluarga dan 4 bus pariwisata ukuran medium dengan penjagaan warga.',
  },
  {
    id: 'toilet',
    name: 'Toilet & Kamar Bilas Bersih',
    distance: 'Di area Pendopo & Curug',
    description: 'Tersedia 8 bilik toilet bersih dengan air pegunungan jernih dan kamar bilas terpisah.',
  },
  {
    id: 'mushola',
    name: 'Mushola Al-Asri',
    distance: '80 meter dari Parkir',
    description: 'Mushola berarsitektur kayu yang nyaman, lengkap dengan perlengkapan sholat dan tempat wudhu.',
  },
  {
    id: 'warung',
    name: 'Warung Kopi & Oleh-Oleh Warga',
    distance: 'Sepanjang jalan masuk desa',
    description: 'Menjual kopi sangrai lokal, keripik singkong, madu hutan, dan sayuran segar harga petani.',
  },
];

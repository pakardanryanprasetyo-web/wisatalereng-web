import { useState } from 'react';
import { MapPin, Plus, Minus, Compass, Car, Trees, Droplets, Store } from 'lucide-react';
import { VILLAGE_CONTACT } from '../data/villageData';

interface MapMarker {
  id: string;
  label: string;
  subtitle: string;
  x: number;
  y: number;
  isPrimary?: boolean;
  icon: 'village' | 'parking' | 'rice' | 'waterfall' | 'store';
}

const MAP_MARKERS: MapMarker[] = [
  {
    id: 'pendopo',
    label: 'Desa Wisata Lereng Asri',
    subtitle: 'Pendopo Utama & Titik Kumpul Wisatawan',
    x: 52,
    y: 48,
    isPrimary: true,
    icon: 'village',
  },
  {
    id: 'parkir',
    label: 'Area Parkir Utama',
    subtitle: '50 m dari Pendopo · Muat mobil & bus medium',
    x: 36,
    y: 66,
    icon: 'parking',
  },
  {
    id: 'sawah',
    label: 'Sawah Terasering',
    subtitle: 'Jalur trekking pagi 150 m ke arah utara',
    x: 68,
    y: 34,
    icon: 'rice',
  },
  {
    id: 'curug',
    label: 'Curug Embun Lereng',
    subtitle: '10 menit jalan kaki melewati jembatan bambu',
    x: 78,
    y: 24,
    icon: 'waterfall',
  },
  {
    id: 'warung',
    label: 'Mushola & Warung Warga',
    subtitle: '80 m sebelum pendopo · Kopi & oleh-oleh',
    x: 42,
    y: 57,
    icon: 'store',
  },
];

interface VillageMapProps {
  heightClass?: string;
  interactiveLegend?: boolean;
}

export function VillageMap({
  heightClass = 'h-[260px] md:h-[320px]',
  interactiveLegend = false,
}: VillageMapProps) {
  const [selectedId, setSelectedId] = useState<string>('pendopo');
  const [zoom, setZoom] = useState<number>(1);

  const selectedMarker = MAP_MARKERS.find((m) => m.id === selectedId) ?? MAP_MARKERS[0];

  const handleZoomIn = () => setZoom((z) => Math.min(1.4, Number((z + 0.2).toFixed(1))));
  const handleZoomOut = () => setZoom((z) => Math.max(0.8, Number((z - 0.2).toFixed(1))));
  const handleReset = () => {
    setZoom(1);
    setSelectedId('pendopo');
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#D8CEBE] bg-[#E8EFE2]">
      <div className={`relative w-full ${heightClass} overflow-hidden select-none`}>
        {/* Scalable SVG terrain & road map */}
        <div
          className="w-full h-full transition-transform duration-200 ease-out origin-center"
          style={{ transform: `scale(${zoom})` }}
        >
          <svg
            viewBox="0 0 800 480"
            className="w-full h-full object-cover"
            role="img"
            aria-label="Peta wilayah Desa Wisata Lereng Asri"
          >
            {/* Base highland green terrain */}
            <rect width="800" height="480" fill="#E6EEDC" />

            {/* Topographic contours */}
            <path
              d="M-40 160 C 140 120, 260 220, 440 140 C 580 80, 680 120, 840 70 L 840 0 L -40 0 Z"
              fill="#D4E3C5"
            />
            <path
              d="M420 0 C 520 70, 630 60, 820 150 L 820 0 Z"
              fill="#C4D8B2"
            />
            <path
              d="M-20 380 C 180 340, 320 430, 520 360 C 660 310, 740 350, 830 330 L 830 480 L -20 480 Z"
              fill="#DCE8CD"
            />

            {/* Contour elevation lines */}
            <path
              d="M 30 90 Q 220 140, 410 85 T 770 110"
              fill="none"
              stroke="#B7CEA3"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 10 250 Q 250 290, 480 210 T 790 220"
              fill="none"
              stroke="#B7CEA3"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* Mountain river stream */}
            <path
              d="M 650 30 C 620 110, 640 160, 580 220 C 530 270, 560 350, 510 475"
              fill="none"
              stroke="#89B9C9"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 650 30 C 620 110, 640 160, 580 220 C 530 270, 560 350, 510 475"
              fill="none"
              stroke="#B8DAE6"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Terraced rice field pattern blocks */}
            <g opacity="0.55" stroke="#8DB580" strokeWidth="2.5" fill="none">
              <path d="M 480 130 Q 540 115, 595 145" />
              <path d="M 470 148 Q 540 132, 605 162" />
              <path d="M 465 166 Q 535 150, 610 180" />
              <path d="M 460 184 Q 535 168, 615 198" />
            </g>

            {/* Main Provincial Road (Jalan Raya Tawangmangu) */}
            <path
              d="M -20 420 Q 120 390, 210 345 T 310 315"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M -20 420 Q 120 390, 210 345 T 310 315"
              fill="none"
              stroke="#D8CEBE"
              strokeWidth="2"
            />

            {/* Village Access Road to Pendopo */}
            <path
              d="M 190 365 Q 250 330, 288 318 Q 335 280, 416 230"
              fill="none"
              stroke="#FAF5EA"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d="M 190 365 Q 250 330, 288 318 Q 335 280, 416 230"
              fill="none"
              stroke="#D9822B"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
            />

            {/* Trekking trail to Sawah & Curug */}
            <path
              d="M 416 230 Q 490 190, 544 163 Q 585 140, 624 115"
              fill="none"
              stroke="#8D6E4E"
              strokeWidth="3"
              strokeDasharray="5 5"
              strokeLinecap="round"
            />

            {/* Road labels */}
            <text
              x="68"
              y="436"
              fill="#4A473F"
              fontSize="14"
              fontWeight="700"
              fontFamily="Nunito Sans, sans-serif"
            >
              Dari Kota Karanganyar / Solo →
            </text>
            <text
              x="540"
              y="390"
              fill="#3F6D7E"
              fontSize="13"
              fontWeight="600"
              fontFamily="Nunito Sans, sans-serif"
            >
              Sungai Sumber Asri
            </text>
          </svg>

          {/* Interactive Marker Pins */}
          {MAP_MARKERS.map((marker) => {
            const isSelected = marker.id === selectedMarker.id;
            return (
              <button
                key={marker.id}
                type="button"
                onClick={() => setSelectedId(marker.id)}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-full min-h-[48px] min-w-[48px] flex flex-col items-center justify-end group focus:outline-none"
                aria-label={`Pilih penanda ${marker.label}`}
              >
                {marker.isPrimary && (
                  <span className="mb-1 px-2.5 py-1 rounded-lg bg-[#2F6B3F] text-white text-xs font-bold whitespace-nowrap shadow-sm">
                    Lereng Asri
                  </span>
                )}
                <span
                  className={`flex items-center justify-center rounded-full shadow-md border-2 border-white transition-transform ${
                    marker.isPrimary
                      ? 'w-11 h-11 bg-[#D9822B] text-[#1F1B16]'
                      : isSelected
                        ? 'w-10 h-10 bg-[#2F6B3F] text-white scale-110'
                        : 'w-9 h-9 bg-white text-[#2F6B3F] hover:scale-105'
                  }`}
                >
                  {marker.icon === 'village' && <MapPin className="w-5 h-5" strokeWidth={2.4} />}
                  {marker.icon === 'parking' && <Car className="w-4 h-4" strokeWidth={2.2} />}
                  {marker.icon === 'rice' && <Trees className="w-4 h-4" strokeWidth={2.2} />}
                  {marker.icon === 'waterfall' && <Droplets className="w-4 h-4" strokeWidth={2.2} />}
                  {marker.icon === 'store' && <Store className="w-4 h-4" strokeWidth={2.2} />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Zoom & Recenter Controls (48px min touch target) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Perbesar peta"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#D8CEBE] text-[#2B2A26] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] active:scale-95"
          >
            <Plus className="w-5 h-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Perkecil peta"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#D8CEBE] text-[#2B2A26] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] active:scale-95"
          >
            <Minus className="w-5 h-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Pusatkan peta ke Desa Lereng Asri"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#D8CEBE] text-[#2F6B3F] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] active:scale-95"
          >
            <Compass className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>

        {/* Bottom Overlay Marker Info */}
        <div className="absolute bottom-3 left-3 right-16 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-sm border border-[#D8CEBE] rounded-xl px-4 py-2.5 shadow-sm">
          <p className="text-[15px] font-bold text-[#2F6B3F] leading-tight">
            {selectedMarker.label}
          </p>
          <p className="text-[14px] text-[#4A473F] leading-snug mt-0.5">
            {selectedMarker.subtitle}
          </p>
        </div>
      </div>

      {/* Optional Interactive Pin Selector Strip */}
      {interactiveLegend && (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar px-3 py-2.5 bg-[#FAF5EA] border-t border-[#D8CEBE]">
          {MAP_MARKERS.map((marker) => {
            const active = marker.id === selectedMarker.id;
            return (
              <button
                key={marker.id}
                type="button"
                onClick={() => setSelectedId(marker.id)}
                className={`min-h-[44px] px-3.5 py-2 rounded-xl text-[14px] font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  active
                    ? 'bg-[#2F6B3F] text-white'
                    : 'bg-white text-[#2B2A26] border border-[#D8CEBE] hover:bg-[#F3ECE0]'
                }`}
              >
                {marker.label}
              </button>
            );
          })}
          <span className="text-[13px] text-[#524F47] whitespace-nowrap shrink-0 pl-2 tabular-nums">
            {VILLAGE_CONTACT.coordinates.lat}, {VILLAGE_CONTACT.coordinates.lng}
          </span>
        </div>
      )}
    </div>
  );
}

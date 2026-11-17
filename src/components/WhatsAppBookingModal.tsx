import { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Copy } from 'lucide-react';
import {
  PACKAGES,
  TourPackage,
  VILLAGE_CONTACT,
  buildWhatsAppUrl,
  formatRupiah,
} from '../data/villageData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  initialPackage: TourPackage | null;
  onClose: () => void;
}

export function WhatsAppBookingModal({
  isOpen,
  initialPackage,
  onClose,
}: WhatsAppBookingModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage?.id ?? PACKAGES[0].id
  );
  const [visitorName, setVisitorName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkgId(initialPackage.id);
    }
  }, [initialPackage]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pkg = PACKAGES.find((p) => p.id === selectedPkgId) ?? PACKAGES[0];
  const childPrice = Math.round(pkg.pricePerPerson * 0.7);
  const estimatedTotal = adults * pkg.pricePerPerson + children * childPrice;

  const messageText = [
    `Halo pengurus ${VILLAGE_CONTACT.fullName},`,
    `Saya ${visitorName.trim() || '(Nama saya)'} ingin memesan paket wisata:`,
    `• Paket: ${pkg.name} (${pkg.duration})`,
    `• Tanggal rencana: ${visitDate || 'Belum ditentukan'}`,
    `• Peserta: ${adults} dewasa${children > 0 ? `, ${children} anak` : ''}`,
    `• Perkiraan biaya: ${formatRupiah(estimatedTotal)}`,
    `Mohon info ketersediaan jadwalnya. Terima kasih!`,
  ].join('\n');

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1A1A17]/60 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-lg bg-[#FAF5EA] rounded-t-2xl sm:rounded-2xl border border-[#D8CEBE] shadow-xl max-h-[92vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#FAF5EA] border-b border-[#D8CEBE] px-5 py-3.5 flex items-center justify-between gap-3">
          <div>
            <h2
              id="booking-modal-title"
              className="font-serif text-[20px] font-bold text-[#2F6B3F]"
            >
              Pesan lewat WhatsApp
            </h2>
            <p className="text-[14px] text-[#524F47]">
              Balasan langsung dari pengurus warga desa
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela pemesanan"
            className="w-12 h-12 rounded-xl bg-white border border-[#D8CEBE] text-[#2B2A26] flex items-center justify-center hover:bg-[#F2EADB]"
          >
            <X className="w-5 h-5" strokeWidth={2.4} />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Package Selection */}
          <div>
            <label
              htmlFor="booking-package"
              className="block text-[15px] font-bold text-[#2B2A26] mb-1.5"
            >
              Pilih Paket Wisata
            </label>
            <select
              id="booking-package"
              value={selectedPkgId}
              onChange={(e) => setSelectedPkgId(e.target.value)}
              className="w-full min-h-[52px] px-3.5 rounded-xl bg-white border border-[#D8CEBE] text-[16px] font-semibold text-[#2B2A26] focus:outline-2 focus:outline-[#2F6B3F]"
            >
              {PACKAGES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} ({item.duration}) — {formatRupiah(item.pricePerPerson)}/orang
                </option>
              ))}
            </select>
          </div>

          {/* Visitor Name & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="visitor-name"
                className="block text-[15px] font-bold text-[#2B2A26] mb-1.5"
              >
                Nama Pemesan
              </label>
              <input
                id="visitor-name"
                type="text"
                placeholder="Contoh: Ibu Rina"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="w-full min-h-[52px] px-3.5 rounded-xl bg-white border border-[#D8CEBE] text-[16px] text-[#2B2A26] focus:outline-2 focus:outline-[#2F6B3F]"
              />
            </div>
            <div>
              <label
                htmlFor="visit-date"
                className="block text-[15px] font-bold text-[#2B2A26] mb-1.5"
              >
                Rencana Tanggal
              </label>
              <input
                id="visit-date"
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full min-h-[52px] px-3.5 rounded-xl bg-white border border-[#D8CEBE] text-[16px] text-[#2B2A26] focus:outline-2 focus:outline-[#2F6B3F]"
              />
            </div>
          </div>

          {/* Participant Counters */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-[#D8CEBE] rounded-xl p-3">
              <span className="block text-[14px] font-bold text-[#2B2A26]">Dewasa</span>
              <span className="block text-[13px] text-[#524F47] mb-2 tabular-nums">
                {formatRupiah(pkg.pricePerPerson)}
              </span>
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setAdults((n) => Math.max(1, n - 1))}
                  aria-label="Kurangi jumlah dewasa"
                  className="w-12 h-12 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] flex items-center justify-center text-[#2B2A26] hover:bg-[#EFE7D6]"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-[18px] font-bold tabular-nums">{adults}</span>
                <button
                  type="button"
                  onClick={() => setAdults((n) => Math.min(60, n + 1))}
                  aria-label="Tambah jumlah dewasa"
                  className="w-12 h-12 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] flex items-center justify-center text-[#2B2A26] hover:bg-[#EFE7D6]"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#D8CEBE] rounded-xl p-3">
              <span className="block text-[14px] font-bold text-[#2B2A26]">Anak (4–10 th)</span>
              <span className="block text-[13px] text-[#524F47] mb-2 tabular-nums">
                {formatRupiah(childPrice)} (-30%)
              </span>
              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setChildren((n) => Math.max(0, n - 1))}
                  aria-label="Kurangi jumlah anak"
                  className="w-12 h-12 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] flex items-center justify-center text-[#2B2A26] hover:bg-[#EFE7D6]"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-[18px] font-bold tabular-nums">{children}</span>
                <button
                  type="button"
                  onClick={() => setChildren((n) => Math.min(40, n + 1))}
                  aria-label="Tambah jumlah anak"
                  className="w-12 h-12 rounded-xl bg-[#FAF5EA] border border-[#D8CEBE] flex items-center justify-center text-[#2B2A26] hover:bg-[#EFE7D6]"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Estimated Total */}
          <div className="bg-white border border-[#D8CEBE] rounded-xl px-4 py-3 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-[#524F47]">Perkiraan total biaya</span>
            <span className="text-[22px] font-bold text-[#B86112] tabular-nums">
              {formatRupiah(estimatedTotal)}
            </span>
          </div>

          {/* Actions (56px min height, >= 12px gap) */}
          <div className="space-y-3 pt-1">
            <a
              href={buildWhatsAppUrl(messageText)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] px-5 rounded-xl bg-[#25D366] text-[#132619] text-[18px] font-bold flex items-center justify-center gap-2.5 hover:bg-[#20BD5A] active:scale-[0.99] shadow-sm"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0" />
              <span>Kirim Pesan WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full min-h-[56px] px-5 rounded-xl bg-white border border-[#D8CEBE] text-[#2B2A26] text-[18px] font-bold flex items-center justify-center gap-2 hover:bg-[#F2EADB]"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-[#2F6B3F]" strokeWidth={2.5} />
                  <span>Pesan Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" strokeWidth={2} />
                  <span>Salin Teks Pesanan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

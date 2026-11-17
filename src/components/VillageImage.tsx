import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface VillageImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function VillageImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
}: VillageImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#E4EBDD] text-[#2F6B3F] p-4 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Mountain className="w-8 h-8 mb-2 opacity-75" strokeWidth={1.8} />
        <span className="text-sm font-semibold leading-snug max-w-[22ch]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

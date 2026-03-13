import { useEffect } from 'react';

export interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt = 'Image', onClose }: LightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="max-w-[95vw] max-h-[95vh] p-4 relative">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[90vh] object-contain rounded"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 text-white bg-slate-800/70 hover:bg-slate-700 rounded-full p-2"
          aria-label="Close image"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


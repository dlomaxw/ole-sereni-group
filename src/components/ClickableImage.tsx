'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageLightbox } from './ImageLightbox';
import { Eye } from 'lucide-react';

interface ClickableImageProps extends Omit<ImageProps, 'onClick'> {
  images?: string[];
  showHover?: boolean;
}

export function ClickableImage({ 
  images: imageArray, 
  src, 
  alt, 
  showHover = true,
  className = '',
  ...props 
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const images = imageArray || [String(src)];

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`relative cursor-pointer group overflow-hidden ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          {...props}
          className={`transition-transform duration-500 group-hover:scale-105 ${props.className || ''}`}
        />
        {showHover && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
              <Eye size={24} className="text-black" />
            </div>
          </div>
        )}
      </div>

      <ImageLightbox
        images={images}
        initialIndex={0}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface StashImageProps {
  src: string;
  alt: string;
}

export default function StashImage({ src, alt }: StashImageProps) {
  const [imgSrc, setImgSrc] = useState(src || '/images/placeholder.svg');

  useEffect(() => {
    setImgSrc(src || '/images/placeholder.svg');
  }, [src]);

  const isPlaceholder = imgSrc.includes('placeholder');

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority
      sizes="280px"
      className={`object-cover transition-all duration-1000 group-hover:scale-110 ${
        isPlaceholder
          ? 'opacity-20 grayscale'
          : 'opacity-100 grayscale hover:grayscale-0'
      }`}
      onError={() => setImgSrc('/images/placeholder.svg')}
    />
  );
}

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { getSanityImageConfig } from 'lib/sanity.client';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

export type UIImageSanityProps = {
  // linked asset from sanity
  asset: SanityImageSource;
  // alt for the image
  alt: string;
  // optional className
  className?: string;
};

export const UIImageSanity = ({
  asset,
  alt,
  className,
}: UIImageSanityProps) => {
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset, {
    imageBuilder: (imageUrlBuilder) =>
      imageUrlBuilder.maxWidth(2048).maxHeight(2048).quality(75).fit('max'),
  });

  if (!imageProps) return null;

  return (
    <Image
      {...imageProps}
      className={className}
      alt={alt}
      sizes="(max-width: 1024px) 100vw, 1024px"
    />
  );
};

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type SharedTypefaceTesterProps = {
  gallery: StaticImageData[];
  children: React.ReactNode;
};

export default function SharedTypefaceSpecimen({
  gallery,
  children,
}: SharedTypefaceTesterProps) {
  const [galleryIndex, setGalleryIndex] = useState<number>(0);

  const prevIndex = (galleryIndex + gallery.length - 1) % gallery.length;
  const nextIndex = (galleryIndex + 1) % gallery.length;

  return (
    <section className="flex w-full items-center justify-center px-[15px] pb-[40px] text-[#383838] laptop:px-[30px] laptop:py-[30px]">
      <div className="flex max-w-[1440px] flex-col items-start justify-center landscape:flex-row landscape:gap-[30px]">
        <div className="w-full pt-[30px] laptop:pt-0 landscape:flex-1">
          <div className="relative flex h-[70vw] max-h-[510px] w-full overflow-hidden">
            {gallery.map((image, index) => {
              let translateX = null;
              if (index === prevIndex) translateX = -100;
              else if (index === nextIndex) translateX = 100;
              else if (index === galleryIndex) translateX = 0;

              return (
                <Image
                  key={index}
                  src={image}
                  alt="gallery"
                  className="absolute left-0 top-0 h-full min-h-full w-full min-w-full object-cover transition-transform duration-200"
                  style={
                    translateX !== null
                      ? {
                          transform: `translateX(${translateX}%)`,
                        }
                      : {
                          display: 'none',
                        }
                  }
                />
              );
            })}
          </div>
          <div className="mt-[8px] grid grid-cols-3 text-[14px] uppercase">
            <p
              className="targeting-action select-none place-self-start"
              onClick={() => {
                setGalleryIndex(
                  (galleryIndex + gallery.length - 1) % gallery.length,
                );
              }}
            >
              PREV
            </p>
            <p className="place-self-center">
              {galleryIndex + 1}/{gallery.length}
            </p>
            <p
              className="targeting-action select-none place-self-end"
              onClick={() => {
                setGalleryIndex((galleryIndex + 1) % gallery.length);
              }}
            >
              NEXT
            </p>
          </div>
        </div>
        <div className="pt-[30px] laptop:pt-0 landscape:flex-1">{children}</div>
      </div>
    </section>
  );
}

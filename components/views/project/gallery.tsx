import MuxPlayer from '@mux/mux-player-react';
import { UIImageSanity } from 'components/ui/image/sanity';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';
import { Project } from 'types/project';

type ProjectGalleryProps = {
  gallery: Project['gallery'];
  IndexChange: (index: number) => void;
};

export default function ProjectGallery({
  gallery,
  IndexChange,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleArrowNext = () => {
    const nextIndex = (currentIndex + 1) % gallery.length;
    IndexChange(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handleArrowPrev = () => {
    const prevIndex = (currentIndex + gallery.length - 1) % gallery.length;
    IndexChange(prevIndex);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="w-full">
      <div className=" mb-[10px] h-[110vw] w-full laptop:h-auto ">
        {gallery[currentIndex]._type === 'image' ? (
          <UIImageSanity
            key={currentIndex}
            asset={gallery[currentIndex]}
            className="h-full w-full object-cover laptop:h-auto"
            alt="Caroussel image"
          />
        ) : (
          <div
            key={currentIndex}
            style={{
              aspectRatio: gallery[currentIndex].data.aspect_ratio.replace(
                ':',
                '/',
              ),
            }}
          >
            <MuxPlayer
              style={{
                aspectRatio: gallery[currentIndex].data.aspect_ratio.replace(
                  ':',
                  '/',
                ),
              }}
              playbackId={gallery[currentIndex].playbackId}
            />
          </div>
        )}
      </div>
      <div className="grid select-none grid-cols-3 items-center laptop:ml-auto laptop:w-[88px]">
        <div
          className="targeting-action m-[-10px] p-[10px]"
          onClick={() => handleArrowPrev()}
        >
          <RightArrowSvg className=" w-[15px] rotate-180 fill-current text-white" />
        </div>
        <p className="justify-self-center">
          {currentIndex + 1}/{gallery.length}
        </p>
        <div
          className="targeting-action m-[-10px] justify-self-end p-[10px]"
          onClick={() => handleArrowNext()}
        >
          <RightArrowSvg className=" w-[15px] fill-current text-white" />
        </div>
      </div>
    </div>
  );
}

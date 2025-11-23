import MuxPlayer from '@mux/mux-player-react';
import { UIImageSanity } from 'components/ui/image/sanity';
import RightArrowSvg from 'icons/right-arrow.svg';
import { Project } from 'types/project';

type ProjectGalleryProps = {
  gallery: Project['gallery'];
  index: number;
  setIndex: (index: number) => void;
};

export default function ProjectGallery({
  gallery,
  index,
  setIndex,
}: ProjectGalleryProps) {
  const handleArrowNext = () => {
    setIndex((index + 1) % gallery.length);
  };

  const handleArrowPrev = () => {
    setIndex((index + gallery.length - 1) % gallery.length);
  };

  return (
    <div className="w-full">
      <div className=" mb-[10px] flex h-[110vw] w-full items-center justify-center overflow-hidden laptop:h-full laptop:max-h-[500px]">
        {gallery[index]._type === 'image' ? (
          <UIImageSanity
            key={index}
            asset={gallery[index]}
            className="h-full w-full object-cover laptop:max-h-[500px] laptop:object-contain laptop:object-right-bottom"
            alt="Caroussel image"
          />
        ) : (
          <div
            key={index}
            style={{
              aspectRatio: gallery[index].data.aspect_ratio.replace(':', '/'),
            }}
            className="flex items-center justify-center"
          >
            <MuxPlayer
              style={{
                aspectRatio: gallery[index].data.aspect_ratio.replace(':', '/'),
              }}
              playbackId={gallery[index].playbackId}
            />
          </div>
        )}
      </div>
      <div className="grid select-none grid-cols-3 items-center overflow-hidden laptop:ml-auto laptop:w-[88px]">
        <div
          className="targeting-action m-[-10px] p-[10px]"
          onClick={() => handleArrowPrev()}
        >
          <RightArrowSvg className=" w-[15px] rotate-180 fill-current text-white" />
        </div>
        <p className="justify-self-center">
          {index + 1}/{gallery.length}
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

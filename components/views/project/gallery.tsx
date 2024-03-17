import MuxPlayer from '@mux/mux-player-react';
import { UIImageSanity } from 'components/ui/image/sanity';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';
import { Project } from 'types/project';

type ProjectGalleryProps = {
  gallery: Project['gallery'];
};

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number>(0);
  console.log(gallery[index]);

  return (
    <div className="w-full">
      <div className=" mb-[10px] h-[110vw] w-full laptop:h-auto ">
        {gallery[index]._type === 'image' ? (
          <UIImageSanity
            asset={gallery[index]}
            className="h-full w-full object-cover laptop:h-auto  "
            alt="Caroussel image"
          />
        ) : (
          <div
            key={index}
            style={{
              aspectRatio: gallery[index].data.aspect_ratio.replace(':', '/'),
            }}
          >
            <MuxPlayer playbackId={gallery[index].playbackId} />
          </div>
        )}
      </div>
      <div className="grid select-none grid-cols-3 items-center laptop:ml-auto laptop:w-[88px]">
        <div
          className="m-[-10px] cursor-pointer p-[10px]"
          onClick={() =>
            setIndex((index + gallery.length - 1) % gallery.length)
          }
        >
          <RightArrowSvg className=" w-[15px] rotate-180 fill-current text-white" />
        </div>
        <p className="justify-self-center">
          {index + 1}/{gallery.length}
        </p>
        <div
          className="m-[-10px] cursor-pointer justify-self-end p-[10px]"
          onClick={() => setIndex((index + 1) % gallery.length)}
        >
          <RightArrowSvg className=" w-[15px] fill-current text-white" />
        </div>
      </div>
    </div>
  );
}

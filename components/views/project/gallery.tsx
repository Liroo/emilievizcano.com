import RightArrowSvg from 'icons/right-arrow.svg';
import { Project } from 'lib/sanity.queries';
import { useState } from 'react';

type ProjectGalleryProps = {
  gallery: Project['gallery'];
};

export default function ProjectGallery({ gallery }: ProjectGalleryProps) {
  const [index, setIndex] = useState<number>(0);

  return (
    <div>
      <div>Image</div>
      <div className="grid select-none grid-cols-3 items-center">
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

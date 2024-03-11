import UIIconsCross from 'components/ui/icons/cross';
import { UIImageSanity } from 'components/ui/image/sanity';
import UIPill from 'components/ui/pill';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';

import Link from 'next/link';
import { useState } from 'react';

type ProjectViewProps = {
  slug?: string;
};

export default function ProjectView({ slug }: ProjectViewProps) {
  const project = useAppSelector(selectProjectBySlug(slug));
  console.log(project);

  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [carrouselImages, setCarrouselImages] = useState([]);

  // useEffect(() => {
  //   project.gallery.map((image) => setCarrouselImages(image));
  //   console.log(carrouselImages);
  // }, []);

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === carrouselImages.length - 1 ? 0 : prevIndex + 1,
  //   );
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? carrouselImages.length - 1 : prevIndex - 1,
  //   );
  // };

  return (
    <>
      <div
        className={`hidden overflow-hidden bg-black transition-all duration-300 desktop:flex ${galleryOpen ? 'w-[600px]' : 'w-0'} h-screen`}
      >
        <div className="h-full w-[600px] min-w-[600px]">
          {project.gallery.map((asset, index) => (
            <UIImageSanity
              key={index}
              asset={asset}
              className=""
              alt="gallery image"
            />
          ))}
        </div>
      </div>
      <div
        onClick={() => setGalleryOpen(!galleryOpen)}
        className="relative grid h-full w-screen overflow-auto bg-[#252527] font-sans text-[16px] font-light text-white laptop:w-[820px] laptop:text-[15px]"
      >
        <Link href="/">
          <div
            className="absolute right-[16px] top-[24px] -m-[10px] cursor-pointer p-[10px]"
            onClick={() => {}}
          >
            <UIIconsCross className="rotate-45" />
          </div>
        </Link>

        <div className="mx-[16px] mt-[18px] flex h-dvh flex-col laptop:mx-[30px] laptop:mt-[30px]">
          <div className="flex h-[36px] w-full bg-[#252527] laptop:h-[90px]">
            <h2 className="self-baseline font-romie text-[19px] font-normal text-white laptop:text-[54px]">
              {project.title}
            </h2>
          </div>

          <div className="mt-[20px] w-full laptop:h-[420px] laptop:w-[322px] ">
            {project.gallery.map((asset, index) => (
              <UIImageSanity
                key={index}
                asset={asset}
                className=""
                alt="gallery image"
              />
            ))}
          </div>

          <div className=" mb-[10px] mt-[10px] text-[12px] laptop:text-[15px]">
            {project.description.map((array, index) => (
              <p
                className="mt-[15px] font-[300] leading-[18px] laptop:leading-[20px] "
                key={index}
              >
                {array.children[0].text}
              </p>
            ))}
          </div>

          <div className="mb-[18px] mt-[8px] flex max-w-[360px] flex-wrap">
            {project.tags.map((tags, index) => (
              <div key={index} className="mr-[8px] mt-[8px]">
                <UIPill label={tags} />
              </div>
            ))}
          </div>

          <div className="my-[10px] flex  items-center laptop:mt-[25px]">
            <RightArrowSvg className="w-[18px] fill-current text-white" />
            <div>
              <p className="ml-[6px] text-[6px] uppercase">project</p>
              <p className="ml-[6px] text-[12px] uppercase">{project.title}</p>
            </div>
          </div>

          <div className="my-[10px] flex  items-center laptop:mt-[25px]">
            <RightArrowSvg className="w-[18px] fill-current text-white" />
            <div>
              <p className="ml-[6px] text-[6px] uppercase">role</p>
              <p className="ml-[6px] text-[12px] uppercase">{project.role}</p>
            </div>
          </div>

          <div className="my-[10px] flex  items-center laptop:mt-[25px]">
            <RightArrowSvg className="w-[18px] fill-current text-white" />
            <div>
              <p className="ml-[6px] text-[6px] uppercase">worked as</p>
              <p className="ml-[6px] text-[12px] uppercase">
                {project.workingAs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

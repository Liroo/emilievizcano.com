import UIIconsCross from 'components/ui/icons/cross';
import { UIImageSanity } from 'components/ui/image/sanity';
import UIPill from 'components/ui/pill';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';

import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { useState } from 'react';
import ProjectGallery from './gallery';

type ProjectViewProps = {
  slug?: string;
};

export default function ProjectView({ slug }: ProjectViewProps) {
  const project = useAppSelector(selectProjectBySlug(slug));

  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className={`hidden overflow-hidden bg-black transition-all duration-300 desktop:flex ${galleryOpen ? 'w-[600px]' : 'w-0'} h-screen`}
      >
        <div className="h-full w-[600px] min-w-[600px]">
          <UIImageSanity
            asset={project.gallery}
            className="h-full"
            alt="gallery image"
          />
        </div>
      </div>
      <div
        onClick={() => setGalleryOpen(!galleryOpen)}
        className="relative grid h-full w-screen bg-[#252527] font-sans text-[16px] font-light text-white laptop:w-[820px] laptop:text-[15px]"
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
              {project.title.split('').map((letter, index) => {
                const isUpperCase =
                  project.titleSs01Map[index] ===
                  project.titleSs01Map[index].toUpperCase();

                return (
                  <span key={index} className={isUpperCase ? 'ss01' : ''}>
                    {letter}
                  </span>
                );
              })}
            </h2>
          </div>

          <div className="grid h-[calc(100dvh-56px)] overflow-y-scroll pb-[16px] laptop:grid-cols-6 laptop:grid-rows-2 laptop:gap-[20px] laptop:pb-[46px]">
            <div className="col-span-3 col-start-3 row-span-1">
              <ProjectGallery gallery={project.gallery} />
            </div>
            <div className="col-span-6 row-span-1 mr-[20px] mt-[30px] leading-[24px] laptop:mt-[20px] laptop:leading-[20px]">
              <PortableText value={project.description} />
            </div>

            <div className="mb-[18px] mt-[8px] flex max-w-[280px] flex-wrap">
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
                <p className="ml-[6px] text-[12px] uppercase">
                  {project.title}
                </p>
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
                <p className="ml-[6px] text-[6px] uppercase">worked</p>
                <p className="ml-[6px] text-[12px] uppercase">
                  {project.workingAs}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

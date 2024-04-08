import UIIconsCross from 'components/ui/icons/cross';
import UIPill from 'components/ui/pill';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';

import { PortableText } from '@portabletext/react';
import { urlForImage } from 'lib/sanity.image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProjectAnimation from './animation';
import ProjectGallery from './gallery';

type ProjectViewProps = {
  slug?: string;
};

export default function ProjectView({ slug }: ProjectViewProps) {
  const project = useAppSelector(selectProjectBySlug(slug));
  const [galleryOpen, setGalleryOpen] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    // precache sanity images
    project.gallery.forEach((asset) => {
      if (asset._type === 'image') {
        const img = new Image();
        img.src = urlForImage(asset).width(2048).quality(75).url();
      }
    });
  }, []);

  return (
    <>
      <ProjectAnimation show={galleryOpen} project={project} index={index} />
      <div className="relative grid h-full w-screen bg-[#252527] font-sans text-[16px] font-light text-white laptop:w-[820px] laptop:text-[15px]">
        <Link href="/">
          <div
            className="targeting-action absolute right-[16px] top-[24px] -m-[10px] p-[10px]"
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

          <div className="grid h-[calc(100dvh-56px)] content-baseline overflow-y-scroll pb-[16px] laptop:grid-cols-7 laptop:grid-rows-[auto_1fr] laptop:gap-[20px] laptop:pb-[46px]">
            <div className="flex items-end laptop:col-span-4 laptop:col-start-4 laptop:row-span-1">
              <ProjectGallery
                gallery={project.gallery}
                index={index}
                setIndex={setIndex}
              />
            </div>
            <div className="mr-[20px] mt-[30px] leading-[24px] laptop:col-span-7 laptop:row-start-1 laptop:mt-[20px] laptop:leading-[20px]">
              <PortableText value={project.description} />
            </div>

            <div className=" hidden laptop:block">
              <div
                className={`targeting-action absolute bottom-[30px] z-30 grid h-[30px] w-[30px] select-none place-content-center rounded-full bg-white transition-all duration-300 laptop:bottom-[50px] ${galleryOpen ? '-translate-x-[min(calc(100vw-820px-50px),76vh)] rotate-180' : ''}`}
                onClick={() => setGalleryOpen(!galleryOpen)}
              >
                <RightArrowSvg className="w-[15px] shrink-0 rotate-180 fill-current text-[#383838]" />
              </div>
            </div>

            <div className=" laptop:col-span-3 laptop:row-start-2 laptop:content-start">
              <div className=" mt-[8px] flex max-w-[280px] flex-wrap laptop:max-w-[500px]">
                {project.tags.map((tags, index) => (
                  <div key={index} className="mr-[8px] mt-[8px]">
                    <UIPill label={tags} />
                  </div>
                ))}
              </div>

              <div className="laptop:col-span-2 laptop:col-start-1 laptop:row-span-1">
                <div className="my-[10px] flex  items-center laptop:mt-[25px]">
                  <RightArrowSvg className="w-[18px] fill-current text-white" />
                  <div>
                    <p className="ml-[6px] text-[6px] uppercase laptop:text-[8px]">
                      project
                    </p>
                    <p className="ml-[6px] text-[12px] uppercase laptop:text-[15px]">
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="my-[10px] flex  items-center laptop:mt-[25px]">
                  <RightArrowSvg className="w-[18px] fill-current text-white" />
                  <div>
                    <p className="ml-[6px] text-[6px] uppercase laptop:text-[8px]">
                      role
                    </p>
                    <p className="ml-[6px] text-[12px] uppercase laptop:text-[15px]">
                      {project.role}
                    </p>
                  </div>
                </div>

                <div className="my-[10px] flex  items-center laptop:mt-[25px]">
                  <RightArrowSvg className="w-[18px] fill-current text-white" />
                  <div>
                    <p className="ml-[6px] text-[6px] uppercase laptop:text-[8px]">
                      worked
                    </p>
                    <p className="ml-[6px] text-[12px] uppercase laptop:ml-[6px] laptop:text-[15px]">
                      {project.workingAs}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

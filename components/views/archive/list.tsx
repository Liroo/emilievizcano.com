import UIIconsCross from 'components/ui/icons/cross';
import RightArrowSvg from 'icons/right-arrow.svg';
import { Project } from 'lib/sanity.queries';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ArchiveProject from './project';

type ArchiveListProps = {
  projetcs: Project[];
};

export default function ArchiveList({ projetcs }: ArchiveListProps) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll">
      {projetcs.map((project, index) => (
        <>
          <div
            className={`grid w-full grid-rows-[0fr] transition-all duration-500 ${
              openIndex === index ? 'grid grid-rows-[1fr]' : ''
            }`}
          >
            <div className="overflow-hidden">
              <ArchiveProject project={project} />
            </div>
          </div>

          <div
            key={project._id}
            className={twMerge(
              'group relative flex h-[30px] min-h-[30px] cursor-pointer items-center border-b border-white pr-[16px] hover:bg-white hover:text-black laptop:pr-[30px]',
              openIndex === index ? 'bg-white text-black' : '',
            )}
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            <div className="flex w-[16px] min-w-[16px] items-center justify-center laptop:w-[30px] laptop:min-w-[30px]">
              <UIIconsCross
                className="h-[4px] w-[4px] laptop:h-[6px] laptop:w-[6px]"
                classNameLines={twMerge(
                  'group-hover:bg-black',
                  openIndex === index ? 'bg-black' : '',
                )}
              />
            </div>
            <div className="flex w-[50vw] min-w-[50vw] laptop:w-[35vw] laptop:min-w-[35vw]">
              <p className="w-[30px] min-w-[30px] uppercase laptop:w-[120px] laptop:min-w-[120px]">
                {(index + 1).toString().padStart(2, '0')}
              </p>
              <p className="truncate pr-[16px] uppercase">{project.title}</p>
            </div>
            <div className="flex flex-1 overflow-hidden">
              <p className="truncate pr-[16px] uppercase laptop:w-[calc(60%-100px)]">
                {project.type}
              </p>
              <p className="hidden uppercase laptop:block">
                {project.gallery.length} asset
                {project.gallery.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="absolute right-0 pr-[16px] laptop:pr-[30px]">
              <RightArrowSvg
                className={twMerge(
                  `w-[16px] fill-current text-white transition-transform group-hover:text-black ${
                    openIndex === index ? 'rotate-90' : '-rotate-90'
                  }`,
                  openIndex === index ? 'text-black' : '',
                )}
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

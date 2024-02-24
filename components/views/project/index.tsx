import UIIconsCross from 'components/ui/icons/cross';
import UIPill from 'components/ui/pill';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';

import Link from 'next/link';

type ProjectViewProps = {
  slug?: string;
};

export default function ProjectView({ slug }: ProjectViewProps) {
  const project = useAppSelector(selectProjectBySlug(slug));

  console.log(project);

  return (
    <>
      <div className="relative h-full w-screen bg-[#252527] text-[16px] font-light text-white laptop:w-[820px] laptop:text-[15px]">
        <Link href="/">
          <div
            className="absolute right-[16px] top-[24px] -m-[10px] cursor-pointer p-[10px]"
            onClick={() => {}}
          >
            <UIIconsCross className="rotate-45" />
          </div>
        </Link>

        <div className="">
          <div className="">
            <h2 className="self-baseline font-romie text-[19px] font-normal text-white laptop:text-[54px]">
              {project.title}
            </h2>
          </div>

          <div>{/* <Image /> */}</div>
        </div>

        <div>{/* <p>{project.description(0).children(0).text}</p> */}</div>

        <div className="mt-[8px] flex max-w-[360px] flex-wrap">
          {project.tags.map((tags, index) => (
            <div key={index} className="mr-[8px] mt-[8px]">
              <UIPill label={tags} />
            </div>
          ))}
        </div>

        <div className="mt-[10px] flex  items-center laptop:mt-[25px]">
          <RightArrowSvg className="w-[18px] fill-current text-white" />
          <div className="">
            <p className="ml-[6px] text-[6px] uppercase">project</p>
            <p className="ml-[6px] text-[12px] uppercase">{project.title}</p>
          </div>
        </div>

        <div className="mt-[10px] flex  items-center laptop:mt-[25px]">
          <RightArrowSvg className="w-[18px] fill-current text-white" />
          <div className="">
            <p className="ml-[6px] text-[6px] uppercase">role</p>
            <p className="ml-[6px] text-[12px] uppercase">{project.role}</p>
          </div>
        </div>

        <div className="mt-[10px] flex  items-center laptop:mt-[25px]">
          <RightArrowSvg className="w-[18px] fill-current text-white" />
          <div className="">
            <p className="ml-[6px] text-[6px] uppercase">worked as</p>
            <p className="ml-[6px] text-[12px] uppercase">
              {project.workingAs}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import UIIconsCross from 'components/ui/icons/cross';
import { selectProjectBySlug } from 'flux/project/selector';
import { useAppSelector } from 'flux/store';

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

        <div>
          <div>
            <h2>{project.title}</h2>
          </div>

          <div>{/* <Image /> */}</div>
        </div>

        <div></div>
      </div>
    </>
  );
}

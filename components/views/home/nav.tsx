import RightArrowSvg from 'icons/right-arrow.svg';
import InfosJpg from 'images/infos.jpg';
import ProjectsJpg from 'images/projects.jpg';
import TypefacesJpg from 'images/typefaces.jpg';
import { Project } from 'lib/sanity.queries';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type HomeNavProps = {
  projects: Project[];
  setNavOpen: (navOpen: boolean) => void;
};

const typefaces = [
  {
    label: 'Tangerine',
    id: 'tangerine',
  },
  {
    label: 'Korosu',
    id: 'korosu',
  },
  {
    label: 'Lapicide',
    id: 'lapicide',
  },
  {
    label: 'Tubular',
    id: 'tubular',
  },
];

export default function HomeNav({ projects, setNavOpen }: HomeNavProps) {
  const [navIndexOpen, setNavIndexOpen] = useState<number>(-1);

  useEffect(() => {
    setNavOpen(navIndexOpen !== -1);
  }, [navIndexOpen]);

  return (
    <nav className="laptop:px-[30px] w-full max-w-[600px] select-none px-[16px]">
      <div
        className="laptop:mb-[11px] group mb-[24px] mt-[11px] flex cursor-pointer items-center justify-between"
        onClick={() => {
          setNavIndexOpen(navIndexOpen === 0 ? -1 : 0);
        }}
      >
        <div className="flex">
          <div
            className={`laptop:block mr-[11px] hidden h-[60px] w-0 overflow-hidden transition-all group-hover:w-[60px] ${
              navIndexOpen === 0 ? '!w-[60px]' : ''
            }`}
          >
            <Image
              src={ProjectsJpg}
              alt="projects"
              className="h-[60px] w-[60px] min-w-[60px]"
            />
          </div>
          <p className="laptop:text-[30px] laptop:leading-[45px] text-[20px] leading-[24px]">
            Projects
          </p>
        </div>
        <RightArrowSvg
          className={`w-[17px] fill-current text-white transition-all ${
            navIndexOpen === 0
              ? '-rotate-45 group-hover:rotate-45'
              : 'rotate-45 group-hover:-rotate-45'
          }`}
        />
      </div>
      <div
        className={`grid w-full grid-rows-[0fr] transition-all duration-500 ${
          navIndexOpen === 0 ? 'grid grid-rows-[1fr]' : ''
        }`}
      >
        <div className="overflow-hidden">
          <div className="h-px w-full bg-white" />
          <div className="my-[24px] w-full max-w-[426px] columns-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white"
              >
                <div className="w-[21px]">
                  <p>{(index + 1).toString().padStart(2, '0')}</p>
                </div>
                <p className="laptop:ml-[18px] ml-[12px]">{project.title}</p>
              </div>
            ))}
            <div className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white">
              <div className="w-[21px]">
                <p>{(projects.length + 1).toString().padStart(2, '0')}</p>
              </div>
              <p className="laptop:ml-[18px] ml-[12px]">Archives</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-white" />
      <div
        className="laptop:mb-[11px] group mb-[24px] mt-[11px] flex cursor-pointer items-center justify-between"
        onClick={() => {
          setNavIndexOpen(navIndexOpen === 1 ? -1 : 1);
        }}
      >
        <div className="flex">
          <div
            className={`laptop:block mr-[11px] hidden h-[60px] w-0 overflow-hidden transition-all group-hover:w-[60px] ${
              navIndexOpen === 1 ? '!w-[60px]' : ''
            }`}
          >
            <Image
              src={TypefacesJpg}
              alt="projects"
              className={`h-[60px] w-[60px] min-w-[60px] ${
                navIndexOpen === 1 ? '!w-[60px]' : ''
              }`}
            />
          </div>
          <p className="laptop:text-[30px] laptop:leading-[45px] text-[20px] leading-[24px]">
            Typefaces
          </p>
        </div>
        <RightArrowSvg
          className={`w-[17px] fill-current text-white transition-all ${
            navIndexOpen === 1
              ? '-rotate-45 group-hover:rotate-45'
              : 'rotate-45 group-hover:-rotate-45'
          }`}
        />
      </div>
      <div
        className={`grid w-full grid-rows-[0fr] transition-all duration-500 ${
          navIndexOpen === 1 ? 'grid grid-rows-[1fr]' : ''
        }`}
      >
        <div className="overflow-hidden">
          <div className="h-px w-full bg-white" />
          <div className="grid-flow-rows my-[24px] grid w-full max-w-[426px] grid-cols-1">
            {typefaces.map(({ label }, index) => (
              <div
                key={index}
                className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white"
              >
                <div className="w-[21px]">
                  <p>{(index + 1).toString().padStart(2, '0')}</p>
                </div>
                <p className="laptop:ml-[18px] ml-[12px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-white" />
      <div className="laptop:mb-[11px] group mb-[24px] mt-[11px] flex cursor-pointer items-center justify-between">
        <div className="flex">
          <div className="laptop:block mr-[11px] hidden h-[60px] w-0 overflow-hidden transition-all group-hover:w-[60px]">
            <Image
              src={InfosJpg}
              alt="projects"
              className="h-[60px] w-[60px] min-w-[60px]"
            />
          </div>
          <p className="laptop:text-[30px] laptop:leading-[45px] text-[20px] leading-[24px]">
            Infos
          </p>
        </div>
        <RightArrowSvg className="w-[17px] rotate-45 fill-current text-white transition-all group-hover:-rotate-45" />
      </div>
    </nav>
  );
}

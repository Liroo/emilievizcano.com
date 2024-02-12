import { selectNotArchivedProjects } from 'flux/project/selector';
import { useAppDispatch, useAppSelector } from 'flux/store';
import useMousePosition from 'hooks/useMousePosition';
import RightArrowSvg from 'icons/right-arrow.svg';
import InfosJpg from 'images/infos.jpg';
import ProjectsJpg from 'images/projects.jpg';
import TypefacesJpg from 'images/typefaces.jpg';
import { urlForImage } from 'lib/sanity.image';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export type HomeNavProps = {
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

export default function HomeNav({ setNavOpen }: HomeNavProps) {
  const [navIndexOpen, setNavIndexOpen] = useState<number>(-1);
  const [imageUrl, setImageUrl] = useState<string>(null);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const mousePosition = useMousePosition();
  const projects = useAppSelector(selectNotArchivedProjects);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    setNavOpen(navIndexOpen !== -1);
  }, [navIndexOpen]);

  const onMouseEnter = async (url: string) => {
    if (!url) return;
    // load image and wait for it to be loaded
    setImageUrl(url);
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setShowPreview(true);
    };
  };
  const onMouseLeave = () => {
    setShowPreview(false);
  };

  const generateUrl = (index: number) =>
    urlForImage(projects[index].gallery[0]).width(500).url();

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
            <NextImage
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
              <Link href={`/projects/${project.slug}`} key={index}>
                <div
                  className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white"
                  onMouseEnter={() => onMouseEnter(generateUrl(index))}
                  onMouseLeave={() => onMouseLeave()}
                >
                  <div className="w-[21px]">
                    <p>{(index + 1).toString().padStart(2, '0')}</p>
                  </div>
                  <p className="laptop:ml-[18px] ml-[12px]">{project.title}</p>
                </div>
              </Link>
            ))}
            <Link href="/infos">
              <div className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white">
                <div className="w-[21px]">
                  <p>{(projects.length + 1).toString().padStart(2, '0')}</p>
                </div>
                <p className="laptop:ml-[18px] ml-[12px]">Archives</p>
              </div>
            </Link>
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
            <NextImage
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
              <Link href="/typefaces" key={index}>
                <div className="laptop:text-[17px] laptop:leading-[25px] laptop:mb-[4px] mb-[6px] flex cursor-pointer text-[14px] leading-[17px] text-[#5F5F5F] transition-all hover:text-white [@media(hover:none){&}]:text-white">
                  <div className="w-[21px]">
                    <p>{(index + 1).toString().padStart(2, '0')}</p>
                  </div>
                  <p className="laptop:ml-[18px] ml-[12px]">{label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-white" />
      <Link href="/infos">
        <div className="laptop:mb-[11px] group mb-[24px] mt-[11px] flex cursor-pointer items-center justify-between">
          <div className="flex">
            <div className="laptop:block mr-[11px] hidden h-[60px] w-0 overflow-hidden transition-all group-hover:w-[60px]">
              <NextImage
                src={InfosJpg}
                alt="infos"
                className="h-[60px] w-[60px] min-w-[60px]"
              />
            </div>
            <p className="laptop:text-[30px] laptop:leading-[45px] text-[20px] leading-[24px]">
              Infos
            </p>
          </div>
          <RightArrowSvg className="w-[17px] rotate-45 fill-current text-white transition-all group-hover:-rotate-45" />
        </div>
      </Link>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50 h-[140px] w-[140px] overflow-hidden`}
        style={{
          transform: `translate(${mousePosition.x + 40}px, ${
            mousePosition.y - 70
          }px)`,
        }}
      >
        <div
          className={`h-full overflow-hidden ${
            showPreview ? 'w-[140px]' : 'w-0'
          } transition-all`}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt="preview"
              className="h-[140px] w-[140px] min-w-[140px]"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

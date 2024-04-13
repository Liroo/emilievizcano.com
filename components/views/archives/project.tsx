import MuxPlayer from '@mux/mux-player-react';
import { PortableText } from '@portabletext/react';
import { UIImageSanity } from 'components/ui/image/sanity';
import UIPill from 'components/ui/pill';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useEffect, useRef } from 'react';
import { Project } from 'types/project';

type ArchiveProjectProps = {
  project: Project;
};

export default function ArchiveProject({ project }: ArchiveProjectProps) {
  const galleryScrollElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // galleryScrollElement is an horizantal scroll but we want the vertical scroll to trigger the horizontal scroll
    const handleWheel = (e: WheelEvent) => {
      if (!e.deltaY) return;
      if (galleryScrollElement.current) {
        galleryScrollElement.current.scrollLeft += e.deltaY + e.deltaX;
        e.preventDefault();
      }
    };

    galleryScrollElement.current.addEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="flex w-full flex-col justify-between text-[16px] laptop:h-[calc(100dvh-30px)] laptop:max-h-[620px] laptop:flex-row laptop:text-[15px]">
      <div className="mx-[16px] mt-[20px] laptop:mx-[30px] laptop:mt-[30px]">
        <h2 className="self-baseline font-romie text-[19px] font-normal leading-[19px] text-white laptop:text-[54px] laptop:leading-[54px]">
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

        <div className="mt-[30px] leading-[18px] laptop:leading-[20px]">
          <PortableText value={project.description} />
        </div>

        {project.tags && (
          <div className="mt-[20px] flex max-w-[400px] flex-wrap laptop:mt-[30px]">
            {project.tags.map((tag, index) => (
              <div key={index} className="mr-[8px] mt-[8px]">
                <UIPill label={tag} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-[20px] laptop:mt-[30px]">
          {project.project && (
            <div className="mt-[20px] flex items-start first:mt-0">
              <RightArrowSvg className="mt-[4px] w-[16px] fill-current text-white" />
              <div className="ml-[6px] flex flex-col leading-[15px]">
                <p className="text-[8px]">PROJECT</p>
                <p>{project.project}</p>
              </div>
            </div>
          )}
          {project.role && (
            <div className="mt-[20px] flex items-start first:mt-0">
              <RightArrowSvg className="mt-[4px] w-[16px] fill-current text-white" />
              <div className="ml-[6px] flex flex-col leading-[15px]">
                <p className="text-[8px]">ROLE</p>
                <p>{project.role}</p>
              </div>
            </div>
          )}
          {project.workingAs && (
            <div className="mt-[20px] flex items-start first:mt-0">
              <RightArrowSvg className="mt-[4px] w-[16px] fill-current text-white" />
              <div className="ml-[6px] flex flex-col leading-[15px]">
                <p className="text-[8px]">WORKING</p>
                <p>{project.workingAs}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        ref={galleryScrollElement}
        className="mt-[20px] flex w-full overflow-auto laptop:mt-0 laptop:w-[60vw] laptop:min-w-[60vw]"
      >
        {project.gallery.map((asset, index) => {
          if (asset._type === 'image')
            return (
              <UIImageSanity
                key={index}
                asset={asset}
                className="ml-auto h-[100vw] w-auto max-w-none tablet:h-[70vw] laptop:h-full"
                alt="gallery image"
              />
            );
          if (asset._type === 'mux.videoAsset')
            return (
              <div
                key={index}
                style={{
                  aspectRatio: asset.data.aspect_ratio.replace(':', '/'),
                }}
              >
                <MuxPlayer playbackId={asset.playbackId} />
              </div>
            );
          return null;
        })}
      </div>
    </div>
  );
}

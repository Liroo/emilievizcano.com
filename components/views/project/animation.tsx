import MuxPlayer from '@mux/mux-player-react';
import { UIImageSanity } from 'components/ui/image/sanity';
import { Project } from 'types/project';

type Props = {
  show: boolean;
  project: Project;
  index: number;
};

export default function ProjectAnimation({ show, project, index }: Props) {
  const poster =
    project.gallery[index]._type === 'image'
      ? project.gallery[index]
      : `https://image.mux.com/${project.gallery[index].playbackId}/thumbnail.jpg`;

  console.log(poster);

  return (
    <div
      className={`hidden overflow-hidden bg-black transition-all duration-300 laptop:flex ${show ? 'w-[600px]' : 'w-0'} h-screen`}
    >
      <div className="h-full w-[600px] min-w-[600px]">
        {project.gallery[index]._type === 'image' ? (
          <UIImageSanity
            asset={project.gallery[index]}
            className="h-full w-full object-cover"
            alt="Caroussel image"
          />
        ) : (
          <div
            style={{
              aspectRatio: project.gallery[index].data.aspect_ratio.replace(
                ':',
                '/',
              ),
            }}
            className="relative left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
          >
            <MuxPlayer
              style={{
                aspectRatio: project.gallery[index].data.aspect_ratio.replace(
                  ':',
                  '/',
                ),
              }}
              playbackId={project.gallery[index].playbackId}
            />
          </div>
        )}
      </div>
    </div>
  );
}

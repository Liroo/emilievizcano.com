import MuxPlayer from '@mux/mux-player-react';
import { UIImageSanity } from 'components/ui/image/sanity';
import { useEffect, useRef, useState } from 'react';
import { Project } from 'types/project';

type Props = {
  show: boolean;
  project: Project;
  index: number;
};

export default function ProjectAnimation({ show, project, index }: Props) {
  const [animatedIndex, setAnimatedIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const animatedIndexArray = useRef<number[]>([]);
  const animatedIndexRef = useRef<number>(0);

  useEffect(() => {
    // if go through a full rotation of the gallery, wype the array of animated indexes to avoid have a full rotation of animation
    if (animatedIndexArray.current[0] === index)
      animatedIndexArray.current = [];
    animatedIndexArray.current.push(index);
  }, [index]);

  useEffect(() => {
    animatedIndexRef.current = animatedIndex;
  }, [animatedIndex]);

  useEffect(() => {
    if (isAnimating) return;

    // recursive function to animate the index
    const animateIndex = () => {
      if (animatedIndexArray.current.length === 0) return;
      setIsAnimating(true);
      const shifted = animatedIndexArray.current.shift();
      setAnimatedIndex(shifted);
      setTimeout(() => {
        setIsAnimating(false);
        animateIndex();
      }, 500);
    };

    animateIndex();
  }, [index, animatedIndex, isAnimating]);

  const prevIndex =
    (animatedIndex + project.gallery.length - 1) % project.gallery.length;
  const nextIndex = (animatedIndex + 1) % project.gallery.length;

  return (
    <div
      className={`relative hidden max-w-[min(calc(100vw-820px),76vh)] overflow-hidden bg-black transition-all duration-300 laptop:flex ${show ? 'w-screen' : 'w-0'} h-screen`}
    >
      {project.gallery.map((asset, i) => {
        let style = null;
        let insideStyle = null;
        if (i === animatedIndex) {
          style = {
            transform: `translateX(0)`,
          };
          insideStyle = {
            transform: `scale(1)`,
          };
        } else if (i === prevIndex) {
          style = {
            transform: `translateX(-100%)`,
          };
          insideStyle = {
            transform: `scaleX(2) scaleY(1.2)`,
          };
        } else if (i === nextIndex) {
          style = {
            transform: `translateX(100%)`,
          };
          insideStyle = {
            transform: `scaleX(2) scaleY(1.2)`,
          };
        }

        return (
          <div
            key={i}
            className="absolute left-0 top-0 z-20 h-full w-screen max-w-[min(calc(100vw-820px),76vh)] overflow-hidden transition-transform duration-500"
            style={
              style !== null
                ? {
                    ...style,
                  }
                : {
                    display: 'none',
                  }
            }
          >
            <div
              className="h-full w-full transition-transform duration-500 ease-in-out"
              style={
                insideStyle !== null
                  ? {
                      ...insideStyle,
                    }
                  : {
                      display: 'none',
                    }
              }
            >
              {asset._type === 'image' ? (
                <UIImageSanity
                  asset={asset}
                  className="h-full w-full object-cover"
                  alt="Caroussel image"
                />
              ) : (
                <div
                  style={{
                    aspectRatio: asset.data.aspect_ratio.replace(':', '/'),
                  }}
                  className="relative left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
                >
                  <MuxPlayer
                    style={{
                      aspectRatio: asset.data.aspect_ratio.replace(':', '/'),
                    }}
                    playbackId={asset.playbackId}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

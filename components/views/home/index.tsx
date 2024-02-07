import EmilieVizcanoSvg from 'icons/emilievizcano.svg';
import RomieArtDirectorSvg from 'icons/romie/art-director.svg';
import RomieDesignerSvg from 'icons/romie/designer.svg';
import RomieGraphicSvg from 'icons/romie/graphic.svg';
import RomieTypeSvg from 'icons/romie/type.svg';
import { Project } from 'lib/sanity.queries';
import { useState } from 'react';
import HomeFooter from './footer';
import HomeNav from './nav';

export type HomeViewProps = {
  projects: Project[];
};

export default function HomeView({ projects }: HomeViewProps) {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-full flex-col bg-black text-white">
      <div className="laptop:p-[32px] p-[16px]">
        <EmilieVizcanoSvg className=" laptop:w-[717px] w-[72%]" />
      </div>
      <div
        className={`pointer-events-none flex-1 transition-opacity duration-300 ${
          navOpen ? 'laptop:opacity-100 opacity-0' : 'opacity-100'
        }`}
      >
        <div className="laptop:mt-0 laptop:justify-center fixed right-[30px] top-0 mt-[150px] flex h-full flex-col items-end">
          <RomieArtDirectorSvg className="laptop:h-[73px] h-[9vw] fill-current text-white" />
          <div className="flex items-center">
            <div className="laptop:mr-[22px] laptop:h-[22px] laptop:w-[22px] relative mr-[11px] flex h-[11px] w-[11px] items-center justify-center">
              <div className="absolute h-px w-full bg-white" />
              <div className="absolute h-full w-px bg-white" />
            </div>
            <RomieGraphicSvg className="laptop:h-[73px] h-[9vw] fill-current text-white" />
          </div>
          <RomieTypeSvg className="laptop:h-[73px] h-[9vw] fill-current text-white" />
          <RomieDesignerSvg className="laptop:h-[73px] h-[9vw] fill-current text-white" />
        </div>
      </div>
      <HomeNav projects={projects} setNavOpen={setNavOpen} />
      <HomeFooter />
    </div>
  );
}

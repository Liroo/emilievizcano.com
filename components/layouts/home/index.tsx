'use client';

import EmilieVizcanoSvg from 'icons/emilievizcano.svg';
import RomieArtDirectorSvg from 'icons/romie/art-director.svg';
import RomieDesignerSvg from 'icons/romie/designer.svg';
import RomieGraphicSvg from 'icons/romie/graphic.svg';
import RomieTypeSvg from 'icons/romie/type.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeFooter from './footer';
import HomeNav from './nav';

export default function LayoutHome() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.sessionStorage.setItem('ev', router.pathname);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <div className="fixed left-0 top-0 flex h-dvh min-h-full w-full flex-col overflow-y-scroll bg-black font-light text-white">
      <div className="p-[16px] laptop:p-[32px]">
        <EmilieVizcanoSvg className=" w-[72%] fill-current text-white laptop:w-[717px]" />
      </div>
      <div
        className={`pointer-events-none flex-1 transition-opacity duration-300 ${
          navOpen ? 'opacity-0 laptop:opacity-100' : 'opacity-100'
        }`}
      >
        <div className="fixed right-[30px] top-0 mt-[150px] flex h-full flex-col items-end laptop:mt-0 laptop:justify-center">
          <RomieArtDirectorSvg className="h-[9vw] fill-current text-white laptop:h-[73px]" />
          <div className="flex items-center">
            <div className="relative mr-[11px] flex h-[11px] w-[11px] items-center justify-center laptop:mr-[22px] laptop:h-[22px] laptop:w-[22px]">
              <div className="absolute h-px w-full bg-white" />
              <div className="absolute h-full w-px bg-white" />
            </div>
            <RomieGraphicSvg className="h-[9vw] fill-current text-white laptop:h-[73px]" />
          </div>
          <RomieTypeSvg className="h-[9vw] fill-current text-white laptop:h-[73px]" />
          <RomieDesignerSvg className="h-[9vw] fill-current text-white laptop:h-[73px]" />
        </div>
      </div>
      <HomeNav setNavOpen={setNavOpen} />
      <HomeFooter />
    </div>
  );
}

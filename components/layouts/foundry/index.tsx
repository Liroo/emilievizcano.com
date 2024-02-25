'use client';

import EmilieVizcanoSvg from 'icons/emilievizcano.svg';
import FoundryFooter from './footer';

type LayoutFoundryProps = {
  children: React.ReactNode;
};

export default function LayoutFoundry({ children }: LayoutFoundryProps) {
  return (
    <div className="fixed left-0 top-0 flex h-dvh min-h-full w-full flex-col overflow-y-scroll font-light text-[#383838]">
      <EmilieVizcanoSvg className="mx-auto mt-[22px] w-[70px] fill-current text-[#383838] laptop:w-[110px]" />
      {children}
      <FoundryFooter />
    </div>
  );
}

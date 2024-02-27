import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceTester from 'components/shared/typeface/tester';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useRef } from 'react';

export default function LapicideView() {
  const specimenRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll pb-[44px] laptop:pb-[72px]">
        <div className="relative flex h-full w-full snap-start snap-always justify-center">
          <div className="font-lapicide text contents text-[45px] leading-[45px] laptop:text-[150px] laptop:leading-[150px]">
            <SharedTypefaceTester defaultValue="LAPICIDE" />
          </div>
          <div
            className="absolute bottom-[30px] grid h-[30px] w-[30px] cursor-pointer select-none place-content-center rounded-full bg-[#383838] laptop:bottom-[50px]"
            onClick={() =>
              specimenRef.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <RightArrowSvg className="w-[15px] shrink-0 rotate-90 fill-current text-white" />
          </div>
        </div>
        <div
          className="h-full w-full snap-start snap-always"
          ref={specimenRef}
        ></div>
        <div className="h-full w-full snap-start snap-always"></div>
      </div>
      <LayoutFoundryFooterTypeface typeface="Lapicide" glyphNumber={396} />
    </>
  );
}

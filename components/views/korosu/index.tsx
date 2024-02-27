import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceSpecimen from 'components/shared/typeface/specimen';
import SharedTypefaceTester from 'components/shared/typeface/tester';
import RightArrowSvg from 'icons/right-arrow.svg';
import KorosuJpg from 'images/foundry/korosu.jpg';
import LapicideJpg from 'images/foundry/lapicide.jpg';
import TangerineJpg from 'images/foundry/tangerine.jpg';
import { useRef } from 'react';

export default function KorosuView() {
  const specimenRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <div className="h-full snap-y snap-mandatory overflow-y-scroll">
          <div className="relative flex h-full w-full snap-start justify-center">
            <div className="font-korosu text contents text-[50px] leading-[50px] laptop:text-[150px] laptop:leading-[150px]">
              <SharedTypefaceTester defaultValue="KOROSU" />
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
            className="flex min-h-full w-full snap-start snap-always"
            ref={specimenRef}
          >
            <SharedTypefaceSpecimen
              gallery={[KorosuJpg, TangerineJpg, LapicideJpg, KorosuJpg]}
            >
              <p className="font-korosu text-[15px] leading-[18px] subpixel-antialiased laptop:text-[20px] laptop:leading-[25px] desktop:text-[25px] desktop:leading-[30px]">
                Introducing Korosu, a striking serif typeface comprising 362
                meticulously crafted glyphs. Launched in 2020, this artistic
                creation draws inspiration from the iconic fictional character
                O'ren Oshii in Quentin Tarantino's film Kill Bill vol.1.
                Korosu's unique serifs echo the sharpness synonymous with O'ren,
                adding a daring refinement to each letterform. The very name
                "Korosu" reveals its captivating essence, translating to "death"
                in Japanese. This clever fusion of grace and profound meaning
                gives Korosu an entrancing aura that immediately captures the
                eye.
              </p>
            </SharedTypefaceSpecimen>
          </div>
          <div className="h-full w-full snap-end"></div>
        </div>
      </div>
      <LayoutFoundryFooterTypeface typeface="Korosu" glyphNumber={396} />
    </>
  );
}

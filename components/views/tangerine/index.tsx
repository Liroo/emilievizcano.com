import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceGlyphs from 'components/shared/typeface/glyphs';
import SharedTypefaceSpecimen from 'components/shared/typeface/specimen';
import SharedTypefaceTester from 'components/shared/typeface/tester';
import RightArrowSvg from 'icons/right-arrow.svg';
import KorosuJpg from 'images/foundry/korosu.jpg';
import LapicideJpg from 'images/foundry/lapicide.jpg';
import TangerineJpg from 'images/foundry/tangerine.jpg';
import { useRef } from 'react';

export default function TangerineView() {
  const specimenRef = useRef<HTMLDivElement>(null);
  const glyphRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <div className="h-full snap-y snap-mandatory overflow-y-scroll">
          <div className="relative flex h-full w-full snap-start justify-center">
            <div className="font-tangerine text contents text-[50px] leading-[50px] laptop:text-[150px] laptop:leading-[150px]">
              <SharedTypefaceTester defaultValue="TANGERINE" />
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
            className="relative flex min-h-full w-full snap-start snap-always"
            ref={specimenRef}
          >
            <SharedTypefaceSpecimen
              gallery={[KorosuJpg, TangerineJpg, LapicideJpg, KorosuJpg]}
            >
              <p className="font-tangerine text-[15px] leading-[18px] subpixel-antialiased  laptop:text-[20px] laptop:leading-[25px] desktop:text-[25px] desktop:leading-[30px]">
                Introducing "Lapicide," a serif typeface that draws inspiration
                from the art of stone engraving and the skillful craftsmanship
                of stonecutters. The name "Lapicide" encompasses both the stone
                engraving technique and the resulting masterpiece it produces.
                The typeface captures the essence of inscriptions meticulously
                carved into architectural elements and monuments, known
                specifically as "lapidary inscriptions." With distinct serifs
                and unique, chiseled-looking terminals, Lapicide replicates the
                effect of engraved typography on stone surfaces. The typeface
                evokes a sense of timelessness and reverence, harkening back to
                the rich history of stone carving and the enduring legacy of
                inscriptions left for generations to come. Lapicide is a tribute
                to the ancient art of engraving and a versatile font choice that
                brings an air of refined elegance, be it in print or digital
                media.
              </p>
            </SharedTypefaceSpecimen>

            <div
              className="absolute bottom-[30px] right-[30px] hidden h-[30px] w-[30px] cursor-pointer select-none place-content-center rounded-full bg-[#383838] laptop:bottom-[50px] landscape:grid"
              onClick={() =>
                glyphRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <RightArrowSvg className="w-[15px] shrink-0 rotate-90 fill-current text-white" />
            </div>
          </div>
          <div
            className="font-tangerine h-full w-full snap-start"
            ref={glyphRef}
          >
            <SharedTypefaceGlyphs />
          </div>
        </div>
      </div>
      <LayoutFoundryFooterTypeface typeface="Tangerine" glyphNumber={396} />
    </>
  );
}

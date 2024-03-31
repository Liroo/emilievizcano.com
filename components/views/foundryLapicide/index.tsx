import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceGlyphs from 'components/shared/typeface/glyphs';
import SharedTypefaceSpecimen from 'components/shared/typeface/specimen';
import SharedTypefaceTester from 'components/shared/typeface/tester';
import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import Lapicide1Jpg from 'images/foundry/lapicide/lapicide1.jpg';
import Lapicide2Jpg from 'images/foundry/lapicide/lapicide2.jpg';
import Lapicide3Jpg from 'images/foundry/lapicide/lapicide3.jpg';
import Lapicide4Jpg from 'images/foundry/lapicide/lapicide4.jpg';
import Lapicide5Jpg from 'images/foundry/lapicide/lapicide5.jpg';
import Lapicide6Jpg from 'images/foundry/lapicide/lapicide6.jpg';
import Lapicide7Jpg from 'images/foundry/lapicide/lapicide7.jpg';
import { useRef } from 'react';
import { ModalEnum } from 'types/modal';
import { CONSTANT_LAPICIDE_GLYPHS } from 'utils/constants';

export default function LapicideView() {
  const specimenRef = useRef<HTMLDivElement>(null);
  const glyphRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-scroll">
          <div className="relative flex h-full w-full justify-center">
            <div className="text contents font-lapicide text-[50px] leading-[50px] laptop:text-[150px] laptop:leading-[150px]">
              <SharedTypefaceTester defaultValue="LAPICIDE" />
            </div>
            <div
              className="targeting-action absolute bottom-[30px] grid h-[30px] w-[30px] select-none place-content-center rounded-full bg-[#383838] laptop:bottom-[50px]"
              onClick={() =>
                specimenRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <RightArrowSvg className="w-[15px] shrink-0 rotate-90 fill-current text-white" />
            </div>
          </div>
          <div className="relative flex min-h-full w-full" ref={specimenRef}>
            <SharedTypefaceSpecimen
              gallery={[
                Lapicide1Jpg,
                Lapicide2Jpg,
                Lapicide3Jpg,
                Lapicide4Jpg,
                Lapicide5Jpg,
                Lapicide6Jpg,
                Lapicide7Jpg,
              ]}
            >
              <p className="font-lapicide text-[15px] leading-[18px] subpixel-antialiased laptop:text-[20px] laptop:leading-[25px] desktop:text-[25px] desktop:leading-[30px]">
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
              className="targeting-action absolute bottom-[30px] right-[30px] hidden h-[30px] w-[30px] select-none place-content-center rounded-full bg-[#383838] laptop:bottom-[50px] landscape:grid"
              onClick={() =>
                glyphRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <RightArrowSvg className="w-[15px] shrink-0 rotate-90 fill-current text-white" />
            </div>
          </div>
          <div
            className="h-[calc(100%-1px)] w-full font-lapicide"
            ref={glyphRef}
          >
            <SharedTypefaceGlyphs glyphs={CONSTANT_LAPICIDE_GLYPHS.split('')} />
          </div>
        </div>
      </div>
      <LayoutFoundryFooterTypeface
        typeface="Lapicide"
        glyphNumber={396}
        onClickBuyTheFont={() => {
          dispatch(
            openModal(ModalEnum.FoundryProduct, {
              handle: 'lapicide',
            }),
          );
        }}
      />
    </>
  );
}

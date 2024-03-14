import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceGlyphs from 'components/shared/typeface/glyphs';
import SharedTypefaceSpecimen from 'components/shared/typeface/specimen';
import SharedTypefaceTester from 'components/shared/typeface/tester';
import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import Korosu1Jpg from 'images/foundry/korosu/korosu1.jpg';
import Korosu2Jpg from 'images/foundry/korosu/korosu2.jpg';
import Korosu3Jpg from 'images/foundry/korosu/korosu3.jpg';
import Korosu4Jpg from 'images/foundry/korosu/korosu4.jpg';
import Korosu5Jpg from 'images/foundry/korosu/korosu5.jpg';
import { useRef } from 'react';
import { ModalEnum } from 'types/modal';

export default function KorosuView() {
  const specimenRef = useRef<HTMLDivElement>(null);
  const glyphRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-scroll">
          <div className="relative flex h-full w-full justify-center">
            <div className="text contents font-korosu text-[50px] leading-[50px] laptop:text-[150px] laptop:leading-[150px]">
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
          <div className="relative flex min-h-full w-full" ref={specimenRef}>
            <SharedTypefaceSpecimen
              gallery={[
                Korosu1Jpg,
                Korosu2Jpg,
                Korosu3Jpg,
                Korosu4Jpg,
                Korosu5Jpg,
              ]}
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

            <div
              className="absolute bottom-[30px] right-[30px] hidden h-[30px] w-[30px] cursor-pointer select-none place-content-center rounded-full bg-[#383838] laptop:bottom-[50px] landscape:grid"
              onClick={() =>
                glyphRef.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <RightArrowSvg className="w-[15px] shrink-0 rotate-90 fill-current text-white" />
            </div>
          </div>
          <div className="h-[calc(100%-1px)] w-full font-korosu" ref={glyphRef}>
            <SharedTypefaceGlyphs />
          </div>
        </div>
      </div>
      <LayoutFoundryFooterTypeface
        typeface="Korosu"
        glyphNumber={396}
        onClickBuyTheFont={() => {
          dispatch(
            openModal(ModalEnum.FoundryProduct, {
              handle: 'korosu',
            }),
          );
        }}
      />
    </>
  );
}

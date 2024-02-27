import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceTester from 'components/shared/typeface/tester';

export default function KorosuView() {
  return (
    <>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll pb-[44px] laptop:pb-[72px]">
        <div className="h-full w-full snap-start snap-always">
          <div className="font-korosu text contents text-[45px] leading-[45px] laptop:text-[150px] laptop:leading-[150px]">
            <SharedTypefaceTester defaultValue="KOROSU" />
          </div>
        </div>
        <div className="h-full w-full snap-start snap-always"></div>
        <div className="h-full w-full snap-start snap-always"></div>
      </div>
      <LayoutFoundryFooterTypeface typeface="Korosu" glyphNumber={396} />
    </>
  );
}

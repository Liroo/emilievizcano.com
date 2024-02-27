import LayoutFoundryFooterTypeface from 'components/layouts/foundry/footerTypeface';
import SharedTypefaceTester from 'components/shared/typeface/tester';

export default function TangerineView() {
  return (
    <>
      <div className="h-full snap-y snap-mandatory overflow-y-scroll pb-[44px] laptop:pb-[72px]">
        <div className="h-full w-full snap-start snap-always">
          <div className="font-tangerine text contents text-[45px] leading-[45px] laptop:text-[150px] laptop:leading-[150px]">
            <SharedTypefaceTester defaultValue="TANGERINE" />
          </div>
        </div>
        <div className="h-full w-full snap-start snap-always"></div>
        <div className="h-full w-full snap-start snap-always"></div>
      </div>
      <LayoutFoundryFooterTypeface typeface="Tangerine" glyphNumber={396} />
    </>
  );
}

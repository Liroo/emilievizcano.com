import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import Link from 'next/link';

type LayoutFoundryFooterTypefaceProps = {
  typeface: string;
  glyphNumber: number;
  onClickBuyTheFont: any;
};

export default function LayoutFoundryFooterTypeface({
  typeface,
  glyphNumber,
  onClickBuyTheFont,
}: LayoutFoundryFooterTypefaceProps) {
  return (
    <>
      <div className="h-[44px] w-full laptop:h-[72px]" />
      <footer className="fixed bottom-0 left-0 h-[44px] w-full overflow-hidden bg-[#E8E8E8] laptop:h-[72px] laptop:min-h-[72px]">
        <div className="h-px w-full bg-[#383838] laptop:mx-auto laptop:w-[calc(100%-60px)]" />
        <div
          className={`absolute left-0 top-0 grid h-full w-full grid-cols-6 items-center justify-between gap-[20px] px-[16px] transition-all duration-200 laptop:gap-[30px] laptop:px-[30px]`}
        >
          <Link href="/">
            <EVSvg className="w-[22px] fill-current text-[#383838] laptop:w-[37px]" />
          </Link>
          <div className="col-span-2 col-start-3 flex cursor-pointer items-center laptop:col-auto laptop:items-start">
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] underline laptop:text-[12px] laptop:leading-[15px]">
              EULA &
              <br />
              Font Licenses
            </p>
          </div>
          <div className="hidden items-center laptop:flex laptop:items-start">
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              Typeface
              <br />
              {typeface}
            </p>
          </div>
          <div className="hidden items-center laptop:flex laptop:items-start">
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              {glyphNumber}
              <br />
              Glyphs
            </p>
          </div>

          <div
            className="col-span-2 col-start-5 flex justify-end laptop:col-auto laptop:justify-start"
            onClick={onClickBuyTheFont}
          >
            <div className="flex cursor-pointer select-none items-center justify-center rounded-full bg-[#383838] px-[15px] py-[6px] text-white laptop:px-[20px]">
              <p className="whitespace-nowrap font-romie text-[12px] laptop:text-[15px]">
                Buy the font
              </p>
              <RightArrowSvg className="ml-[15px] w-[12px] shrink-0 fill-current laptop:ml-[20px] laptop:w-[14px]" />
            </div>
          </div>

          <div className="col-span-2 col-start-4 hidden items-center laptop:col-auto laptop:flex laptop:items-start laptop:justify-end">
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-right text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              <a href="https://www.instagram.com/emilievizcano" target="_blank">
                Instagram
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/emilievizcano"
                target="_blank"
              >
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

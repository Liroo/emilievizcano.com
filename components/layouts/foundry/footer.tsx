import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import Link from 'next/link';

export default function LayoutFoundryFooter() {
  return (
    <div className="fixed bottom-0 left-0 h-[44px] w-full overflow-hidden bg-[#E8E8E8] laptop:h-[72px] laptop:min-h-[72px]">
      <div className="h-px w-full bg-[#383838] laptop:mx-auto laptop:w-[calc(100%-60px)]" />
      <div
        className={`absolute left-0 top-0 grid h-full w-full grid-cols-6 items-center justify-between gap-[20px] px-[16px] transition-all duration-200 laptop:gap-[30px] laptop:px-[30px]`}
      >
        <Link href="/">
          <EVSvg className="w-[22px] fill-current text-[#383838] laptop:w-[37px]" />
        </Link>
        <div className="col-span-2 col-start-2 flex cursor-pointer items-center laptop:col-auto laptop:items-start">
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
            Custom
            <br />
            Typefaces
          </p>
        </div>
        <div className="hidden items-center laptop:flex laptop:items-start">
          <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            Custom
            <br />
            Logotypes
          </p>
        </div>

        <div className="hidden laptop:block"></div>

        <div className="col-span-2 col-start-4 flex items-center laptop:col-auto laptop:items-start laptop:justify-end">
          <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
          <p className="pl-[8px] text-right text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            <a href="https://www.instagram.com/emilievizcano" target="_blank">
              Instagram
            </a>
            <br />
            <a href="https://www.linkedin.com/in/emilievizcano" target="_blank">
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

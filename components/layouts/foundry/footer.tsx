import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';

export default function FoundryFooter() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 left-0 h-[44px] w-full overflow-hidden laptop:h-[72px] laptop:min-h-[72px]">
      <div className="h-px w-full bg-[#383838] laptop:mx-auto laptop:w-[calc(100%-60px)]" />
      <div
        className={`absolute left-0 top-0 h-full w-full ${
          scrolled ? '-translate-x-full' : ''
        } flex items-center justify-between px-[16px] transition-all duration-200 laptop:px-[30px]`}
      >
        <EVSvg className="w-[22px] fill-current text-[#383838] laptop:w-[37px]" />
        <div className="flex items-center">
          <div className="flex items-center laptop:items-start">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] underline laptop:text-[12px] laptop:leading-[15px]">
              EULA &
              <br />
              Font Licenses
            </p>
          </div>
          <div className="ml-[20px] flex items-center laptop:ml-[50px] laptop:items-start">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              Custom
              <br />
              Typefaces
            </p>
          </div>
          <div className="ml-[50px] hidden items-center laptop:flex laptop:items-start">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              Custom
              <br />
              Logotypes
            </p>
          </div>
          <div className="ml-[50px] hidden items-center laptop:flex laptop:items-start">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]"></p>
          </div>
        </div>
        <div className="hidden items-center laptop:flex laptop:items-start">
          <RightArrowSvg className="w-[10px] fill-current text-[#383838] laptop:w-[17px]" />
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
        <div
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#383838] laptop:hidden"
          onClick={() => setScrolled(true)}
        >
          <RightArrowSvg className="w-[12px] fill-current text-[#383838]" />
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 h-full w-full laptop:hidden ${
          !scrolled ? 'translate-x-full' : ''
        } flex items-center justify-between px-[16px] transition-all duration-200`}
      >
        <div
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#383838]"
          onClick={() => setScrolled(false)}
        >
          <RightArrowSvg className="w-[12px] rotate-180 fill-current text-[#383838]" />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px]">
              previously working
              <br />
              at les graphiquants
            </p>
          </div>
          <div className="ml-[20px] flex items-center">
            <RightArrowSvg className="w-[10px] fill-current text-[#383838]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px]">
              previously working
              <br />
              at services généraux
            </p>
          </div>
        </div>
        <div className="w-[22px]" />
      </div>
    </div>
  );
}

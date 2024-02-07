import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';

export default function HomeFooter() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  return (
    <div className="laptop:h-[72px] laptop:min-h-[72px] relative h-[44px] w-full overflow-hidden">
      <div className="laptop:mx-[30px] h-px w-full bg-white" />
      <div
        className={`absolute left-0 top-0 h-full w-full ${
          scrolled ? '-translate-x-full' : ''
        } laptop:px-[30px] flex items-center justify-between px-[16px] transition-all duration-200`}
      >
        <EVSvg className="laptop:w-[37px] w-[22px]" />
        <div className="flex items-center">
          <div className="laptop:items-start flex items-center">
            <RightArrowSvg className="laptop:w-[17px] w-[10px] fill-current text-white" />
            <p className="laptop:text-[12px] laptop:leading-[15px] pl-[8px] text-[9px] uppercase leading-[11px]">
              © emilie vizcano
              <br />
              ALL RIGHTS RESERVED
            </p>
          </div>
          <div className="laptop:items-start laptop:ml-[50px] ml-[20px] flex items-center">
            <RightArrowSvg className="laptop:w-[17px] w-[10px] fill-current text-white" />
            <p className="laptop:text-[12px] laptop:leading-[15px] pl-[8px] text-[9px] uppercase leading-[11px]">
              currently working
              <br />
              at Ledger
            </p>
          </div>
          <div className="laptop:items-start laptop:flex ml-[50px] hidden items-center">
            <RightArrowSvg className="laptop:w-[17px] w-[10px] fill-current text-white" />
            <p className="laptop:text-[12px] laptop:leading-[15px] pl-[8px] text-[9px] uppercase leading-[11px]">
              previously working
              <br />
              at les graphiquants
            </p>
          </div>
          <div className="laptop:items-start laptop:flex ml-[50px] hidden items-center">
            <RightArrowSvg className="laptop:w-[17px] w-[10px] fill-current text-white" />
            <p className="laptop:text-[12px] laptop:leading-[15px] pl-[8px] text-[9px] uppercase leading-[11px]">
              previously working
              <br />
              at services généraux
            </p>
          </div>
        </div>
        <div className="laptop:items-start laptop:flex hidden items-center">
          <RightArrowSvg className="laptop:w-[17px] w-[10px] fill-current text-white" />
          <p className="laptop:text-[12px] laptop:leading-[15px] pl-[8px] text-right text-[9px] uppercase leading-[11px]">
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
          className="laptop:hidden flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white"
          onClick={() => setScrolled(true)}
        >
          <RightArrowSvg className="w-[12px] fill-current text-black" />
        </div>
      </div>

      <div
        className={`laptop:hidden absolute left-0 top-0 h-full w-full ${
          !scrolled ? 'translate-x-full' : ''
        } flex items-center justify-between px-[16px] transition-all duration-200`}
      >
        <div
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white"
          onClick={() => setScrolled(false)}
        >
          <RightArrowSvg className="w-[12px] rotate-180 fill-current text-black" />
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <RightArrowSvg className="w-[10px] fill-current text-white" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px]">
              previously working
              <br />
              at les graphiquants
            </p>
          </div>
          <div className="ml-[20px] flex items-center">
            <RightArrowSvg className="w-[10px] fill-current text-white" />
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

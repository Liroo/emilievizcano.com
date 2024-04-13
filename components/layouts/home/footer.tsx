import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';

export default function HomeFooter() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  return (
    <div className="relative h-[44px] w-full overflow-hidden laptop:h-[72px] laptop:min-h-[72px]">
      <div className="h-px w-full bg-white laptop:mx-auto laptop:w-[calc(100%-60px)]" />
      <div
        className={`absolute left-0 top-0 h-full w-full ${
          scrolled ? '-translate-x-full' : ''
        } grid grid-cols-6 items-center justify-between gap-[20px] px-[16px] transition-all duration-200 laptop:grid-cols-5 laptop:gap-[30px] laptop:px-[30px] desktop:grid-cols-6`}
      >
        <EVSvg className="w-[22px] fill-current text-white laptop:w-[37px]" />

        <div className="pointer-coarse:text-white col-span-2 col-start-2 flex items-center text-white laptop:col-span-1 laptop:col-start-auto laptop:items-start">
          <RightArrowSvg className="w-[10px] shrink-0 fill-current laptop:w-[17px]" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            © emilie vizcano
            <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
        <div className="pointer-coarse:text-white col-span-2 col-start-4 flex items-center text-[#FFFFFF] transition-colors duration-200 hover:text-[#5F5F5F] laptop:col-span-1 laptop:col-start-auto laptop:items-start">
          <RightArrowSvg className="w-[10px] shrink-0 fill-current laptop:w-[17px]" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            currently working
            <br />
            as Freelancer
          </p>
        </div>
        <a
          href="https://www.les-graphiquants.fr/"
          target="_blank"
          className="targeting-action pointer-coarse:text-white hidden items-center text-[#FFFFFF] transition-colors duration-200 hover:text-[#5F5F5F] laptop:flex laptop:items-start"
        >
          <RightArrowSvg className="w-[10px] shrink-0 fill-current laptop:w-[17px]" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            previously working
            <br />
            at les graphiquants
          </p>
        </a>
        <a
          href="https://generaux.services/"
          target="_blank"
          className="targeting-action pointer-coarse:text-white hidden items-center text-[#FFFFFF] transition-colors duration-200 hover:text-[#5F5F5F] laptop:items-start desktop:flex"
        >
          <RightArrowSvg className="w-[10px] shrink-0 fill-current laptop:w-[17px]" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            previously working
            <br />
            at services généraux
          </p>
        </a>
        <div className="pointer-coarse:text-white hidden items-center text-[#FFFFFF] laptop:flex laptop:items-start laptop:justify-end">
          <RightArrowSvg className="w-[10px] fill-current laptop:w-[17px]" />
          <p className="pl-[8px] text-right text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
            <a
              className="targeting-action text-[#FFFFFF] transition-colors duration-200 hover:text-[#5F5F5F]"
              href="https://www.instagram.com/emilievizcano"
              target="_blank"
            >
              Instagram
            </a>
            <br />
            <a
              className="targeting-action text-[#FFFFFF] transition-colors duration-200 hover:text-[#5F5F5F]"
              href="https://www.linkedin.com/in/emilievizcano"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        <div
          className="targeting-action flex h-[20px] w-[20px] items-center justify-center justify-self-end rounded-full bg-white laptop:hidden"
          onClick={() => setScrolled(true)}
        >
          <RightArrowSvg className="w-[12px] fill-current text-black" />
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 h-full w-full laptop:hidden ${
          !scrolled ? 'translate-x-full' : ''
        } grid grid-cols-6 items-center justify-between px-[16px] transition-all duration-200`}
      >
        <div
          className="targeting-action flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white"
          onClick={() => setScrolled(false)}
        >
          <RightArrowSvg className="w-[12px] rotate-180 fill-current text-black" />
        </div>
        <a
          href="https://www.les-graphiquants.fr/"
          target="_blank"
          className="targeting-action col-span-2 col-start-2 flex"
        >
          <RightArrowSvg className="w-[10px] fill-current text-white" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px]">
            previously working
            <br />
            at les graphiquants
          </p>
        </a>
        <a
          href="https://generaux.services/"
          target="_blank"
          className="targeting-action col-span-3 col-start-4 ml-[20px] flex"
        >
          <RightArrowSvg className="w-[10px] fill-current text-white" />
          <p className="pl-[8px] text-[9px] uppercase leading-[11px]">
            previously working
            <br />
            at services généraux
          </p>
        </a>
      </div>
      <div className="w-[22px]" />
    </div>
  );
}

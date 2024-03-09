import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import EVSvg from 'icons/ev.svg';
import RightArrowSvg from 'icons/right-arrow.svg';
import Link from 'next/link';
import { ModalEnum } from 'types/modal';

export default function LayoutFoundryFooterDiscount() {
  const dispatch = useAppDispatch();

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
          <div className="col-span-2 col-start-2 hidden items-center laptop:col-auto laptop:flex laptop:items-start">
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              Discount
              <br />
              Page
            </p>
          </div>
          <Link
            href="/foundry"
            className="hidden items-center laptop:flex laptop:items-start"
          >
            <RightArrowSvg className="w-[10px] shrink-0 fill-current text-[#383838] laptop:w-[17px]" />
            <p className="pl-[8px] text-[9px] uppercase leading-[11px] laptop:text-[12px] laptop:leading-[15px]">
              Back to
              <br />
              the foundry
            </p>
          </Link>

          <div className="col-start-3 flex laptop:col-start-4">
            <div
              className="flex h-[24px] cursor-pointer select-none items-center justify-center rounded-full bg-[#383838] px-[15px] text-white laptop:h-[28px] laptop:px-[20px]"
              onClick={() => {
                dispatch(openModal(ModalEnum.FoundryDiscountRules));
              }}
            >
              <p className="font-romie text-[12px]">Rules</p>
              <RightArrowSvg className="ml-[15px] w-[12px] shrink-0 fill-current laptop:ml-[20px] laptop:w-[14px]" />
            </div>
          </div>
          <div />

          <div className="col-span-2 col-start-5 flex items-center justify-end laptop:col-auto">
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

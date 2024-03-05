import { useCart } from '@shopify/hydrogen-react';
import UIIconsCross from 'components/ui/icons/cross';
import { closeModal, openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import Link from 'next/link';
import { useMemo } from 'react';
import { ModalEnum } from 'types/modal';

export default function FoundryMenuView() {
  const dispatch = useAppDispatch();

  const { lines } = useCart();

  const cartEntries = useMemo(() => {
    const hash: { [productId: string]: typeof lines } = {};

    lines.forEach((line) => {
      if (!hash[line.merchandise.product.id])
        hash[line.merchandise.product.id] = [];
      hash[line.merchandise.product.id].push(line);
    });

    return Object.entries(hash).map(([_, lines]) => {
      return {
        product: lines[0].merchandise.product,
        lines: lines,
        total: lines.reduce((acc, line) => {
          return acc + ~~line.cost.totalAmount.amount;
        }, 0),
      };
    });
  }, [lines]);

  return (
    <div className="relative h-full w-screen overflow-y-scroll bg-[#CBCBCB] text-[16px] font-light text-[#898989] tablet:max-w-[350px] laptop:text-[15px]">
      <div
        className="absolute right-[12px] top-[20px] -m-[10px] cursor-pointer p-[10px]"
        onClick={() => {
          dispatch(closeModal(ModalEnum.FoundryMenu));
        }}
      >
        <UIIconsCross className="rotate-45" classNameLines="bg-[#383838]" />
      </div>

      <div className="mx-[16px] mt-[95px] text-[25px] leading-[25px] laptop:mx-[30px] laptop:mt-[120px] laptop:text-[35px] laptop:leading-[35px]">
        <div
          className="flex w-full cursor-pointer select-none items-center justify-between border-b border-[#898989] py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(openModal(ModalEnum.FoundryCart));
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="flex items-start font-romie">
            Cart
            <span className="ml-[2px] font-sans text-[15px] leading-[15px]">
              {cartEntries.length}
            </span>
          </p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </div>

        <Link
          href="/foundry"
          className="flex w-full cursor-pointer select-none items-center justify-between border-b border-[#898989] py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="font-romie">Typefaces</p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </Link>

        <Link
          href="/foundry/discount"
          className="flex w-full cursor-pointer select-none items-center justify-between border-b border-[#898989] py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="font-romie">Discount</p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </Link>

        <Link
          href="/foundry/licenses-eula"
          className="flex w-full cursor-pointer select-none items-center justify-between border-b border-[#898989] py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="font-romie">Licenses/EULA</p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </Link>

        <Link
          href="/foundry/faq"
          className="flex w-full cursor-pointer select-none items-center justify-between border-b border-[#898989] py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="font-romie">FAQs</p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </Link>

        <Link
          href="/"
          className="flex w-full cursor-pointer select-none items-center justify-between py-[15px] transition-all hover:text-[#323232] laptop:py-[20px]"
          onClick={() => {
            dispatch(closeModal(ModalEnum.FoundryMenu));
          }}
        >
          <p className="font-romie">Back to site</p>
          <RightArrowSvg className="w-[17px] -rotate-45 fill-current" />
        </Link>
      </div>
    </div>
  );
}

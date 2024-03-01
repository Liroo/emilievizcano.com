import { useCart } from '@shopify/hydrogen-react';
import UIIconsCross from 'components/ui/icons/cross';
import { closeModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import { useMemo } from 'react';
import { ModalEnum } from 'types/modal';

export default function FoundryCartView() {
  const dispatch = useAppDispatch();
  const { lines, linesRemove } = useCart();

  const cartEntry = useMemo(() => {
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
    <div className="relative h-full w-screen max-w-[820px] bg-[#252527] text-[16px] font-light text-white laptop:text-[15px]">
      <div
        className="absolute right-[16px] top-[24px] -m-[10px] cursor-pointer p-[10px]"
        onClick={() => {
          dispatch(closeModal(ModalEnum.FoundryCart));
        }}
      >
        <UIIconsCross className="rotate-45" classNameLines="bg-white" />
      </div>

      <div className="mx-[16px] mt-[18px] flex h-dvh flex-col laptop:mx-[30px] laptop:mt-[30px]">
        <div className="flex h-[36px] w-full bg-[#252527] laptop:h-[90px]">
          <h2 className="self-baseline font-romie text-[19px] laptop:text-[54px]">
            Shop<span className="ss01">p</span>ing Car
            <span className="ss01">t</span>
          </h2>
        </div>

        <div className="h-[calc(100dvh-56px)] overflow-y-scroll pb-[16px] laptop:pb-[46px]">
          {cartEntry.map((entry, index) => (
            <div key={index} className="flex items-center justify-between">
              <p>{entry.product.title}</p>
              {entry.lines.map((line, index) => (
                <p key={index}>{line.merchandise.title}</p>
              ))}
              <p>{entry.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

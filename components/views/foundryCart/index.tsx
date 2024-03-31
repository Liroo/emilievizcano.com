import { useCart } from '@shopify/hydrogen-react';
import UIFormInputRadio from 'components/ui/form/inputRadio';
import UIIconsCross from 'components/ui/icons/cross';
import { closeModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import { useMemo, useState } from 'react';
import { ModalEnum } from 'types/modal';
import FoundryCartRow from './row';

export default function FoundryCartView() {
  const dispatch = useAppDispatch();
  const [eulaAccepted, setEulaAccepted] = useState<boolean>(false);
  const [eulaNeeded, setEulaNeeded] = useState<boolean>(false);
  const { lines, checkoutUrl } = useCart();

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

  const subtotal = useMemo(() => {
    return cartEntries.reduce((acc, entry) => {
      return acc + entry.total;
    }, 0);
  }, [cartEntries]);

  const subtotalFormatted = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(subtotal);

  const onClickCheckout = () => {
    if (!eulaAccepted) return setEulaNeeded(true);
    window.location.href = checkoutUrl;
  };

  return (
    <div className="relative h-full w-screen max-w-[820px] bg-[#252527] text-[16px] font-light text-white laptop:text-[15px]">
      <div
        className="targeting-action absolute right-[16px] top-[24px] -m-[10px] p-[10px]"
        onClick={() => {
          dispatch(closeModal(ModalEnum.FoundryCart));
        }}
      >
        <UIIconsCross className="rotate-45" classNameLines="bg-white" />
      </div>

      <div className="flex h-dvh flex-col px-[16px] py-[18px] laptop:px-[30px] laptop:py-[30px]">
        <div className="flex h-[36px] w-full bg-[#252527] laptop:h-[90px]">
          <h2 className="self-baseline font-romie text-[19px] laptop:text-[54px]">
            Shop<span className="ss01">p</span>ing Car
            <span className="ss01">t</span>
          </h2>
        </div>

        <div className="flex flex-1 flex-col overflow-y-scroll pt-[20px]">
          <div className="mt-auto border-t border-white">
            {cartEntries.length > 0 ? (
              cartEntries.map((entry, index) => (
                <FoundryCartRow key={index} {...entry} />
              ))
            ) : (
              <div className="w-full border-b border-white py-[20px]">
                <div className="flex items-center justify-between">
                  <p className="text-[20px] laptop:text-[25px]">
                    Cart is empty
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-[30px] flex items-center justify-between">
            <p className="text-[20px] laptop:text-[25px]">Subtotal</p>
            <p className="text-[25px] laptop:text-[30px]">
              {subtotalFormatted}
            </p>
          </div>

          <div className="relative mt-[30px] flex select-none flex-col items-start text-[12px] laptop:text-[15px]">
            <UIFormInputRadio
              label="I aggreed the End User License Agreement (EULA)"
              name="eula"
              isSelected={eulaAccepted}
              checked={eulaAccepted}
              onChange={() => {}}
              onClick={() => {
                setEulaAccepted(!eulaAccepted);
                setEulaNeeded(false);
              }}
              iconProps={{
                className: 'border-white',
                classNameInside: eulaAccepted
                  ? 'bg-white border-white'
                  : 'bg-transparent border-transparent',
              }}
            />
            {eulaNeeded && !eulaAccepted ? (
              <div className="select-none text-[0.8em]">
                You have to agree to EULA to proceed checkout
              </div>
            ) : null}
          </div>
          <div className="mt-[30px] flex items-center justify-between">
            <p className="text-[12px] laptop:text-[15px]">
              Taxes are calculated at checkout
            </p>
            <button
              onClick={onClickCheckout}
              disabled={cartEntries.length === 0}
              className={`flex select-none items-center rounded-full border border-white px-[30px] py-[8px] font-romie text-[18px] text-white outline-none transition-all ${cartEntries.length > 0 ? 'targeting-action hover:bg-white hover:text-black' : ' cursor-not-allowed'}`}
            >
              <p className="text-[18px]">Checkout</p>
              <RightArrowSvg className="ml-[30px] w-[20px] fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

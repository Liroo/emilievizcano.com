import EvSvg from 'icons/ev.svg';
import { useState } from 'react';

type FoundryDiscountAlertProps = {
  discount?: string;
  description?: string;
};

export default function FoundryDiscountAlert({
  discount,
  description,
}: FoundryDiscountAlertProps) {
  const [codeCopied, setCodeCopied] = useState<boolean>(false);

  const onClickDiscount = () => {
    navigator.clipboard.writeText(discount);
    setCodeCopied(true);
  };

  return (
    <div className="flex max-h-[calc(100dvh-60px)] w-[675px] max-w-[calc(100vw-32px)] flex-col items-center justify-center bg-[#F4F4F4] p-[20px] font-romie text-[25px] text-black laptop:max-w-[calc(100vw-60px)] laptop:p-[40px]">
      <EvSvg className="w-[46px] fill-current text-black" />

      {description && <p className="mt-[40px] text-center">{description}</p>}
      {discount && (
        <>
          <div
            onClick={onClickDiscount}
            className="mt-[40px] cursor-pointer rounded-full bg-white px-[40px] py-[14px]"
          >
            <p className="text-center text-[20px]">{discount}</p>
          </div>
          {codeCopied && <p className="mt-[6px] text-[15px]">Code copied</p>}
        </>
      )}
    </div>
  );
}

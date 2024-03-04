import { useCart } from '@shopify/hydrogen-react';
import UIIconsCross from 'components/ui/icons/cross';
import { CONSTANTS_FORMAT_LICENSES } from 'utils/constants';

type FoundryCartRowProps = {
  product: ReturnType<typeof useCart>['lines'][0]['merchandise']['product'];
  lines: ReturnType<typeof useCart>['lines'];
  total: number;
};

export default function FoundryCartRow({
  product,
  lines,
  total,
}: FoundryCartRowProps) {
  const { linesRemove } = useCart();

  const onClickRemove = () => {
    linesRemove(lines.map((line) => line.id));
  };

  return (
    <div className="w-full border-b border-white py-[20px]">
      <div className="flex items-center justify-between">
        <p className="text-[20px] laptop:text-[25px]">{product.title}</p>
        <div
          className="m-[-10px] cursor-pointer select-none p-[10px]"
          onClick={onClickRemove}
        >
          <UIIconsCross className="rotate-45" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col text-[12px] text-[#CBCBCB] laptop:text-[15px]">
          {lines.map((line) => (
            <p>
              {line.merchandise.selectedOptions[0].value} -{' '}
              {line.merchandise.selectedOptions[1].value} -{' '}
              {
                CONSTANTS_FORMAT_LICENSES[
                  line.merchandise.selectedOptions[1].value
                ][line.merchandise.selectedOptions[2].value]
              }
            </p>
          ))}
        </div>
        <p className="text-[20px] laptop:text-[25px]">
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
          }).format(total)}
        </p>
      </div>
    </div>
  );
}

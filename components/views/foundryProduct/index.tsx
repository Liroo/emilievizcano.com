import { selectProductByHandle } from 'flux/product/selector';
import { useAppDispatch, useAppSelector } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';

import { useCart } from '@shopify/hydrogen-react';
import UIFormInputRadio from 'components/ui/form/inputRadio';
import UIFormInputSelect from 'components/ui/form/inputSelect';
import { closeModal, openModal } from 'flux/modal/reducer';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { ModalEnum } from 'types/modal';
import { CONSTANTS_FORMAT_LICENSES } from 'utils/constants';

type FroundryProductProps = {
  handle: string;
};

export default function FoundryProduct({ handle }: FroundryProductProps) {
  const { lines, linesAdd } = useCart();
  const product = useAppSelector(selectProductByHandle(handle));
  const dispatch = useAppDispatch();

  const types = product.options.find((option) => option.name === 'Type');
  const usages = product.options.find((option) => option.name === 'Usage');
  const sizes = product.options.find((option) => option.name === 'Size');

  const [typeSelected, setTypeSelected] = useState<any>(types.values[0]);
  const [usagesSelected, setUsagesSelected] = useState<any>(
    Object.fromEntries(usages.values.map((usage) => [usage, false])),
  );

  const usagesArray = Object.entries(usagesSelected)
    .filter(([_, value]) => value)
    .map(([key]) => key);

  const totalPrice = useMemo(() => {
    let price = 0;
    usagesArray.forEach((usage) => {
      const size = usagesSelected[usage];
      if (size !== 'xl') {
        const variant = product.variants.edges.find((variant) => {
          return (
            variant.node.selectedOptions[0].value === typeSelected &&
            variant.node.selectedOptions[1].value === usage &&
            variant.node.selectedOptions[2].value === size
          );
        });

        price += ~~variant.node.price.amount;
      }
    });

    return price;
  }, [typeSelected, usagesSelected]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const selectedVariants = product.variants.edges.filter((variant) => {
      return (
        variant.node.selectedOptions[0].value === typeSelected &&
        usagesArray.includes(variant.node.selectedOptions[1].value) &&
        usagesSelected[variant.node.selectedOptions[1].value] ===
          variant.node.selectedOptions[2].value
      );
    });

    linesAdd(
      selectedVariants
        .filter(
          (variant) =>
            !lines.some((line) => line.merchandise.id === variant.node.id),
        )
        .map((variant) => {
          return {
            attributes: [
              {
                key: 'License Type',
                value: `${variant.node.selectedOptions[0].value} - ${variant.node.selectedOptions[1].value} - ${
                  CONSTANTS_FORMAT_LICENSES[
                    variant.node.selectedOptions[1].value
                  ][variant.node.selectedOptions[2].value]
                }`,
              },
            ],
            merchandiseId: variant.node.id,
          };
        }),
    );

    dispatch(openModal(ModalEnum.FoundryCart));
    dispatch(closeModal(ModalEnum.FoundryProduct));
  };

  return (
    <div className="max-h-[calc(100dvh-60px)] w-[calc(100vw-60px)] max-w-[1100px] bg-[#F4F4F4] p-[20px] text-black laptop:p-[40px]">
      <p className="text-center font-romie text-[20px] laptop:text-[25px]">
        Commercial Licences and usages
      </p>
      <form className="select-none text-[12px] font-light" onSubmit={onSubmit}>
        <fieldset className="mt-[30px]">
          <legend>Choose a license:</legend>
          <div className="mt-[10px] flex flex-wrap gap-x-[25px] gap-y-[5px]">
            {types.values.map((variantOption) => (
              <UIFormInputRadio
                key={variantOption}
                label={variantOption}
                name={variantOption}
                isSelected={typeSelected === variantOption}
                checked={typeSelected === variantOption}
                onChange={() => {}}
                onClick={() => setTypeSelected(variantOption)}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-[12px] laptop:mt-[20px]">
          <legend>Select one or several license usages:</legend>
          <div className="mt-[10px] flex flex-wrap gap-x-[25px] gap-y-[5px]">
            {usages.values.map((variantOption) => (
              <UIFormInputRadio
                key={variantOption}
                label={variantOption}
                name={variantOption}
                isSelected={usagesSelected[variantOption]}
                checked={usagesSelected[variantOption]}
                onChange={() => {}}
                onClick={() => {
                  if (!usagesSelected[variantOption])
                    setUsagesSelected({
                      ...usagesSelected,
                      [variantOption]: 'xs',
                    });
                  else
                    setUsagesSelected({
                      ...usagesSelected,
                      [variantOption]: false,
                    });
                }}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-[30px]">
          <div
            className="mt-[10px] grid gap-x-[25px] gap-y-[5px] max-laptop:!grid-cols-1"
            style={{
              gridTemplateColumns: `repeat(${usagesArray.length}, minmax(0, 1fr))`,
            }}
          >
            {usagesArray.map((usage) => (
              <UIFormInputSelect
                key={usage}
                label={`${usage}:`}
                name={`${usage}-select`}
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const value = event.target.value;
                  setUsagesSelected({
                    ...usagesSelected,
                    [usage]: value,
                  });
                }}
                options={[...sizes.values, 'xl'].map((size) => {
                  let price = 'Contact me!';
                  if (size !== 'xl') {
                    const variants = product.variants.edges.filter(
                      (variant) => {
                        return (
                          variant.node.selectedOptions[0].value ===
                            typeSelected &&
                          variant.node.selectedOptions[1].value === usage &&
                          variant.node.selectedOptions[2].value === size
                        );
                      },
                    );
                    // reduce all price by sum of all prices
                    const priceStr = variants.reduce((accumulator, variant) => {
                      return accumulator + ~~variant.node.price.amount;
                    }, 0);

                    price = `${priceStr}€`;
                  }

                  return {
                    disabled: size === 'xl',
                    label:
                      CONSTANTS_FORMAT_LICENSES[usage][size] + ' - ' + price,
                    value: size,
                  };
                })}
              />
            ))}
          </div>
        </fieldset>

        <div className="mt-[30px] flex flex-col items-start laptop:flex-row laptop:items-center laptop:justify-end">
          <p className="font-romie text-[15px]">Subtotal: {totalPrice}€</p>
          <button
            className="mt-[30px] flex h-[50px] items-center justify-between whitespace-nowrap rounded-full bg-[#383838] px-[15px] text-[15px] text-white laptop:ml-[35px] laptop:mt-0"
            type="submit"
          >
            Add to cart
            <RightArrowSvg className="ml-[60px] w-[13px] fill-current" />
          </button>
        </div>
      </form>
    </div>
  );
}

import anime from 'animejs';
import { StaticImageData } from 'next/image';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { CONSTANT_DISCOUNT_SETTINGS, DiscountSymbols } from 'utils/constants';

export type FoundryDiscountColumnHandle = {
  setSymbol: (symbolKey: DiscountSymbols, rotationCount: number) => void;
};

function FoundryDiscountColumn(_, ref) {
  const [order, setOrder] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const symbols: StaticImageData[] = useMemo(() => {
    return order.map((key) => CONSTANT_DISCOUNT_SETTINGS.symbols[key]);
  }, [order]);

  useEffect(() => {
    setOrder(
      Object.keys(CONSTANT_DISCOUNT_SETTINGS.symbols).sort(
        () => 0.5 - Math.random(),
      ),
    );
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        setSymbol: (symbolKey: DiscountSymbols, rotationCount: number) => {
          const newSymbolIndex = order.indexOf(symbolKey);
          if (newSymbolIndex === -1) return;

          const futureIndex = rotationCount * symbols.length + newSymbolIndex;

          const obj = {
            index,
          };
          anime({
            targets: obj,
            index: futureIndex,
            round: 100,
            duration: rotationCount * 100,
            delay: (rotationCount - 30) * 10,
            easing: 'cubicBezier(0.455, 0.030, 0.000, 1.000)',
            update: function () {
              setIndex(obj.index % symbols.length);
            },
          });
        },
      };
    },
    [order, index],
  );

  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      {[...symbols, ...symbols, ...symbols].map((entry, entryIndex) => (
        <img
          key={entryIndex}
          src={entry.src}
          className="absolute w-[60%]"
          style={{
            transform: `translateY(${(entryIndex - (index + symbols.length)) * 120}%)`,
          }}
        />
      ))}
    </div>
  );
}

export default forwardRef(FoundryDiscountColumn);

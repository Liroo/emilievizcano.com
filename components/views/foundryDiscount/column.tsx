import { StaticImageData } from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { CONSTANT_DISCOUNT_SETTINGS } from 'utils/constants';

const symbolsEntries = Object.entries(CONSTANT_DISCOUNT_SETTINGS.symbols);

export default function FoundryDiscountColumn() {
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

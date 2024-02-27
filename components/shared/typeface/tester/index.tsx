import { useState } from 'react';
import SharedTypefaceTesterRange from './range';

type SharedTypefaceTesterProps = {
  defaultValue: string;
};

export default function SharedTypefaceTester({
  defaultValue,
}: SharedTypefaceTesterProps) {
  const [options, setOptions] = useState<{
    size: number;
    letterSpacing: number;
  }>({
    size: 1,
    letterSpacing: 0,
  });

  const { size, letterSpacing } = options;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <input
        defaultValue={defaultValue}
        type="text"
        className="mt-[-12vh] w-screen overflow-hidden bg-transparent px-[16px] text-center outline-none"
        style={{
          fontSize: `${size}em`,
          letterSpacing: `${letterSpacing}em`,
        }}
      />

      <div className="mt-[100px] flex flex-col items-center justify-center gap-[35px] tablet:flex-row">
        <SharedTypefaceTesterRange
          label="Size"
          value={size}
          min={0.2}
          max={1.8}
          step={0.01}
          onChange={(event) =>
            setOptions({ ...options, size: Number(event.target.value) })
          }
        />
        <SharedTypefaceTesterRange
          label="Spacing"
          value={letterSpacing}
          min={-0.2}
          max={0.2}
          step={0.01}
          onChange={(event) =>
            setOptions({
              ...options,
              letterSpacing: Number(event.target.value),
            })
          }
        />
      </div>
    </div>
  );
}

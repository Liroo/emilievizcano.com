import { useState } from 'react';
import { isTouchDevice } from 'utils/device';

type SharedTypefaceGlyphsProps = {
  glyphs: string[];
};

export default function SharedTypefaceGlyphs({
  glyphs,
}: SharedTypefaceGlyphsProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lockedIndex, setLockedIndex] = useState<number>(-1);

  const onClick = (index: number) => {
    if (index === lockedIndex) {
      setLockedIndex(-1);
    } else {
      setLockedIndex(index);
    }
    setSelectedIndex(index);
  };
  const onMouseEnter = (index: number) => {
    setSelectedIndex(index);
  };

  const onClickGlyph = () => {
    setLockedIndex(-1);
  };

  return (
    <section className="flex h-full w-full justify-center border-t border-black">
      <div className="grid h-full w-full grid-cols-7 content-start justify-center overflow-y-scroll border-black p-[16px] laptop:w-[512px] laptop:grid-cols-10 laptop:border-l laptop:border-r desktop:w-[615px] desktop:grid-cols-12">
        {glyphs.map((glyph, index) => (
          <div
            key={index}
            onMouseEnter={() => !isTouchDevice() && onMouseEnter(index)}
            onClick={() => onClick(index)}
            className={`targeting-action flex h-[48px] max-h-[48px] w-[48px] select-none items-center justify-center ${
              selectedIndex === index || lockedIndex === index
                ? 'border-black laptop:border'
                : ''
            }`}
          >
            <span className="text-center text-[30px]">{glyph}</span>
          </div>
        ))}
      </div>
      <div className="hidden h-full w-[512px] items-center justify-center border-r border-black laptop:flex desktop:w-[615px]">
        <span className="text-[300px] desktop:text-[350px]">
          {glyphs[lockedIndex >= 0 ? lockedIndex : selectedIndex]}
        </span>
      </div>
      {lockedIndex >= 0 && (
        <div
          onClick={onClickGlyph}
          className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-[#E8E8E8] laptop:hidden"
        >
          <span className="text-[300px]">{glyphs[lockedIndex]}</span>
        </div>
      )}
    </section>
  );
}

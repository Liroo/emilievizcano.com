import RightArrowSvg from 'icons/right-arrow.svg';
import { useState } from 'react';
import { isTouchDevice } from 'utils/device';

type FoundryFaqQuestionProps = {
  question: string;
  answer: string;
};

export default function FoundryFaqQuestion({
  question,
  answer,
}: FoundryFaqQuestionProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className="border-b border-black text-left last:border-0">
      <div
        className="targeting-action flex items-start justify-between py-[20px]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => {
          !isTouchDevice() && setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <p className="pr-[16px] text-[20px] leading-[24px]">{question}</p>
        <RightArrowSvg
          className={`text-back mt-[6px] w-[17px] shrink-0 fill-current transition-all ${
            isHover || isOpen ? '-rotate-45' : 'rotate-45'
          }`}
        />
      </div>
      <div
        className={`grid w-full grid-rows-[0fr] transition-all duration-500 ${
          isOpen ? 'grid grid-rows-[1fr]' : ''
        }`}
      >
        <div className="overflow-hidden">
          <div className="h-px w-full bg-black" />
          <p className="targeting-action my-[20px] flex text-[14px] leading-[17px] transition-all laptop:text-[15px] laptop:leading-[20px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

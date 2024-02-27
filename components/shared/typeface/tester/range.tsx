import { InputHTMLAttributes } from 'react';

type SharedTypefaceTesterRangeProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function SharedTypefaceTesterRange({
  label,
  ...rest
}: SharedTypefaceTesterRangeProps) {
  return (
    <div className="flex flex-col items-center justify-center tablet:flex-row">
      <p className="mb-[12px] mr-0 font-sans text-[12px] uppercase leading-[12px] text-[#383838] tablet:mb-0 tablet:mr-[12px]">
        {label}
      </p>
      <input
        type="range"
        className="typetester-range h-[1px] w-[250px] appearance-none bg-[#383838] outline-none"
        {...rest}
      ></input>
    </div>
  );
}

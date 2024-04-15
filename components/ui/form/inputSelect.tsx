import RightArrowSvg from 'icons/right-arrow.svg';
import { HTMLProps, useRef } from 'react';

interface UIFormInputSelectProps extends HTMLProps<HTMLSelectElement> {
  /** Label for the input */
  label: string;
  /** Options */
  options: { label: string; value: string; disabled?: boolean }[];
}

export default function UIFormInputSelect({
  label,
  options,
  ...props
}: UIFormInputSelectProps) {
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <label
      className="relative flex h-[31px] items-center justify-center overflow-hidden rounded-full border-[0.5px] border-black px-[10px] py-[8px]"
      htmlFor={props.name}
      onClick={() => {
        ref.current?.focus();
        ref.current?.click();
      }}
    >
      <p className="whitespace-nowrap">{label}</p>
      <select
        ref={ref}
        className="targeting-action ml-[4px] w-full appearance-none truncate bg-transparent pr-[16px] outline-none"
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <RightArrowSvg className="pointer-events-none absolute right-[10px] top-[50%] mt-px w-[14px] -translate-y-1/2 rotate-90 transform" />
    </label>
  );
}

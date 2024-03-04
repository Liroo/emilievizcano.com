import { twMerge } from 'tailwind-merge';

type UIIconsRadioProps = {
  className?: string;
  classNameInside?: string;
};

export default function UIIconsRadio({
  className,
  classNameInside,
}: UIIconsRadioProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-[10px] w-[10px] items-center justify-center rounded-[3px] border-[0.6px] border-[#383838]',
        className,
      )}
    >
      <div
        className={twMerge(
          'relative flex h-[6px] w-[6px] items-center justify-center rounded-[2px] border-[0.5px] border-[#383838] bg-[#D4D4D4]',
          classNameInside,
        )}
      />
    </div>
  );
}

import { twMerge } from 'tailwind-merge';

type UIPillProps = {
  /** label for the pill */
  label: string;
  /** classname */
  className?: string;
};

export default function UIPill({ label, className = '' }: UIPillProps) {
  return (
    <div
      className={twMerge(
        'rounded-full border border-white px-[10px] py-[6px] text-[16px] laptop:py-[3px] laptop:text-[15px]',
        className,
      )}
    >
      <p>{label}</p>
    </div>
  );
}

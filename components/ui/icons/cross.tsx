import { twMerge } from 'tailwind-merge';

export interface UIIconsCrossProps {
  /** Tailwind CSS classes */
  className?: string;
  /** Tailwind Lines CSS classes */
  classNameLines?: string;
}

export default function UIIconsCross({
  className,
  classNameLines,
}: UIIconsCrossProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-[20px] w-[20px] items-center justify-center',
        className,
      )}
    >
      <div
        className={twMerge('absolute h-px w-full bg-white', classNameLines)}
      />
      <div
        className={twMerge('absolute h-full w-px bg-white', classNameLines)}
      />
    </div>
  );
}

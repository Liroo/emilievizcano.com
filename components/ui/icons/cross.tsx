import { twMerge } from 'tailwind-merge';

export interface UIIconsCrossProps {
  /** Tailwind CSS classes */
  className?: string;
}

export default function UIIconsCross({ className }: UIIconsCrossProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-[20px] w-[20px] items-center justify-center',
        className,
      )}
    >
      <div className="absolute h-px w-full bg-white" />
      <div className="absolute h-full w-px bg-white" />
    </div>
  );
}

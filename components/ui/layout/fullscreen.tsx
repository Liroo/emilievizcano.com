import { HTMLProps } from 'react';

interface UILayoutFullscreenProps extends HTMLProps<HTMLDivElement> {
  /** Modal component children */
  children: React.ReactNode;
  /** className for the layout to add */
  className?: string;
}

export default function UILayoutFullscreen({
  children,
  className,
  ...props
}: UILayoutFullscreenProps) {
  return (
    <div className={`w-screen h-screen ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
}

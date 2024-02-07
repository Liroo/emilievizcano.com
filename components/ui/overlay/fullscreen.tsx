import { MouseEvent } from 'react';

export interface UIOverlayFullscreenProps {
  /** Children to render inside the overlay */
  children?: React.ReactNode;
  /** Class name of the overlay */
  className?: string;
  /** Function to call when the overlay is clicked */
  onClick?(): void;
  /** Function to call when the overlay is clicked prior to mousedown, generally
   * used to click background used with stopPropagation */
  onMouseDown?(event: MouseEvent): void;
}

export default function UIOverlayFullscreen({
  children,
  className,
  onClick,
  onMouseDown,
}: UIOverlayFullscreenProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full ${className}`}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {children}
    </div>
  );
}

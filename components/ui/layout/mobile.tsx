interface UILayoutMobileProps {
  /** Modal component children */
  children: React.ReactNode;
  /** className for the layout to add */
  className?: string;
}

export default function UILayoutMobile({
  children,
  className,
}: UILayoutMobileProps) {
  return (
    <div
      className={`w-full h-full max-w-[504px] flex flex-col ${className ?? ''}`}
    >
      {children}
    </div>
  );
}

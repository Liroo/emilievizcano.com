interface UILayoutModalDesktopProps {
  /** Modal component children */
  children: React.ReactNode;
  /** className for the layout to add */
  className?: string;
}

export default function UILayoutModalDesktop({
  children,
  className,
}: UILayoutModalDesktopProps) {
  return (
    <div
      className={`max-w-[504px] w-full relative overflow-hidden bg-[#151515] rounded-[14px] flex flex-col max-h-[85vh] ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}

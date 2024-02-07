interface UILayoutDesktopProps {
  /** Modal component children */
  children: React.ReactNode;
  /** className for the layout to add */
  className?: string;
}

export default function UILayoutDesktop({
  children,
  className,
}: UILayoutDesktopProps) {
  return (
    <div
      className={`w-full h-full laptop:max-w-[932px] flex flex-col ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
}

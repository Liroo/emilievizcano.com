interface UILayoutBottomSheetProps {
  /** Modal component children */
  children: React.ReactNode;
  /** className for the layout to add */
  className?: string;
}

export default function UILayoutBottomSheet({
  children,
  className = '',
}: UILayoutBottomSheetProps) {
  return (
    <div
      className={`w-full flex flex-col absolute bottom-0 bg-[#151515] rounded-t-[14px] overflow-hidden max-w-[504px] max-h-[calc(var(--vh)*98)] ${className}`}
    >
      {children}
    </div>
  );
}

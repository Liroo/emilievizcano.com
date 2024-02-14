type UIPillProps = {
  /** label for the pill */
  label: string;
};

export default function UIPill({ label }: UIPillProps) {
  return (
    <div className="laptop:py-[3px] rounded-full border border-white px-[10px] py-[6px]">
      <p className="laptop:text-[15px] text-[16px]">{label}</p>
    </div>
  );
}

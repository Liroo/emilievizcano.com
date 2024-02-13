type UIPillProps = {
  /** label for the pill */
  label: string;
};

export default function UIPill({ label }: UIPillProps) {
  return (
    <div className="rounded-full border border-white px-[10px] py-[6px]">
      <p className="text-[16px]">{label}</p>
    </div>
  );
}

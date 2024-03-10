type FoundryDiscountAlertProps = {
  discount?: string;
  description?: string;
};

export default function FoundryDiscountAlert({
  discount,
  description,
}: FoundryDiscountAlertProps) {
  return (
    <div className="max-h-[calc(100dvh-60px)] max-w-[calc(100vw-60px)] bg-[#F4F4F4] p-[20px] text-black laptop:p-[40px]">
      <div className="text-[12px] font-light">
        {description && <p className="text-center">{description}</p>}
        {discount && <p className="text-center">{discount}</p>}
      </div>
    </div>
  );
}

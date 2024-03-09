import { CONSTANT_FAQ } from 'utils/constants';
import FoundryFaqQuestion from './question';

export default function FoundryFaqView() {
  return (
    <div className="mx-auto mt-[20px] flex w-full flex-col justify-center px-[16px] pb-[44px] text-[14px] leading-[18px] laptop:pb-[72px] laptop:text-[15px] laptop:leading-[20px]">
      <div className="flex w-full flex-1 flex-col items-center justify-center pt-[60px] text-center text-black">
        <p className="font-romie text-[40px] leading-[45px] text-[#383838] laptop:text-[55px] laptop:leading-[55px]">
          Frequently Asked Questions
        </p>
        <div className="mt-auto w-full max-w-[700px] select-none pt-[40px] laptop:pt-[80px]">
          {CONSTANT_FAQ.map((faq, index) => (
            <FoundryFaqQuestion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

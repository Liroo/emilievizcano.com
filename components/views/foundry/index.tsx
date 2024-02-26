import KorosuSvg from 'icons/foundry/korosu.svg';
import LapicideSvg from 'icons/foundry/lapicide.svg';
import TangerineSvg from 'icons/foundry/tangerine.svg';
import Link from 'next/link';

export default function FoundryView() {
  return (
    <div className="flex flex-1 flex-col justify-center pb-[44px] laptop:pb-[72px]">
      <p className="text-center font-romie text-[20px] laptop:text-[35px]">
        T<span className="ss01">y</span>pe Foundr<span className="ss01">y</span>
      </p>

      <div className="flex flex-1 flex-col items-center justify-center py-[60px]">
        <Link href="/foundry/lapicide">
          <LapicideSvg className="h-[40px] fill-current text-[#383838] laptop:h-[65px]" />
        </Link>
        <Link href="/foundry/korosu">
          <KorosuSvg className="mt-[30px] h-[40px] fill-current text-[#383838] laptop:mt-[50px] laptop:h-[65px]" />
        </Link>
        <Link href="/foundry/tangerine">
          <TangerineSvg className="mt-[30px] h-[40px] fill-current text-[#383838] laptop:mt-[50px] laptop:h-[65px]" />
        </Link>
      </div>
    </div>
  );
}

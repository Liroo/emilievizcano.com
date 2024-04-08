import KorosuSvg from 'icons/foundry/korosu.svg';
import LapicideSvg from 'icons/foundry/lapicide.svg';
import TangerineSvg from 'icons/foundry/tangerine.svg';
import Link from 'next/link';

export default function FoundryView() {
  return (
    <div className="flex flex-1 flex-col justify-center pb-[44px] laptop:pb-[72px]">
      <div className="flex flex-1 flex-col items-center justify-center py-[60px]">
        <Link href="/foundry/lapicide" className="targeting-action">
          <LapicideSvg className="h-[40px] fill-current text-[#383838] laptop:h-[65px]" />
        </Link>
        <Link href="/foundry/korosu" className="targeting-action">
          <KorosuSvg className="mt-[30px] h-[40px] fill-current text-[#383838] laptop:mt-[50px] laptop:h-[65px]" />
        </Link>
        <Link href="/foundry/tangerine" className="targeting-action">
          <TangerineSvg className="mt-[30px] h-[40px] fill-current text-[#383838] laptop:mt-[50px] laptop:h-[65px]" />
        </Link>
      </div>
    </div>
  );
}

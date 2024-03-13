import UIIconsCross from 'components/ui/icons/cross';
import Link from 'next/link';

export default function ArchiveHeader() {
  return (
    <div className="relative flex h-[30px] min-h-[30px] items-center border-b border-white px-[16px] text-[14px] laptop:px-[30px]">
      <div className="w-[45vw] laptop:w-[35vw]">
        <p className="uppercase">Emilie Vizcano</p>
      </div>
      <div className="flex-1">
        <p className="uppercase">Archives</p>
      </div>
      <Link
        className="absolute right-0 m-[-10px] cursor-pointer p-[10px] pr-[26px] laptop:pr-[40px]"
        href="/"
      >
        <UIIconsCross className="h-[16px] w-[16px] rotate-45" />
      </Link>
    </div>
  );
}

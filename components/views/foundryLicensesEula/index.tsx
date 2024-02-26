import RightArrowSvg from 'icons/right-arrow.svg';
import Link from 'next/link';

export default function FoundryLicensesEulaView() {
  return (
    <div className="mx-auto mt-[20px] flex max-w-[740px] flex-col justify-center px-[16px] pb-[44px] text-[14px] leading-[18px] laptop:pb-[72px] laptop:text-[15px] laptop:leading-[20px]">
      <div className="flex flex-1 flex-col items-center justify-center py-[60px] text-center text-black">
        <p className="font-romie text-[40px] leading-[45px] text-[#383838] laptop:text-[55px] laptop:leading-[55px]">
          Licenses/EULA
        </p>
        <p className="mt-[40px]">
          This contract concerns the usage of our typeface and its various
          fonts.
          <br />
          <br />
          Our products are licensed for your use as an end user, rather than
          being sold outright. This End User License Agreement (EULA) governs
          the use of our Digital Font, as showcased on the{' '}
          <Link href="/" className="underline">
            www.emilievizcano.com
          </Link>{' '}
          website and/or any catalogs associated with Emilie Vizcano. It
          constitutes a legally binding contract between you, the end user, and
          Emilie Vizcano.
          <br />
          <br />
          By paying for, downloading, installing, and/or using our Digital
          Fonts, you acknowledge that you have reviewed and agreed to the terms
          of this agreement. If you do not agree with the terms and conditions
          stated above and below, please refrain from purchasing, accessing,
          downloading, installing, or using our Digital Font.
        </p>
        <div className="mt-[10px] flex">
          <RightArrowSvg className="w-[17px] fill-current" />
          <p className="ml-[6px] underline">Download EULA</p>
        </div>
      </div>
    </div>
  );
}

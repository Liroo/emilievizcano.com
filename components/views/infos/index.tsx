import UIIconsCross from 'components/ui/icons/cross';
import UIPill from 'components/ui/pill';
import RightArrowSvg from 'icons/right-arrow.svg';
import InfosEmilieJpg from 'images/infos/emilie.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { CONSTANT_SERVICES, CONSTANT_SOFTWARES } from 'utils/constants';

export default function InfosView() {
  return (
    <div className="relative h-full w-screen bg-[#252527] text-[16px] font-light text-white laptop:w-[820px] laptop:text-[15px]">
      <Link href="/">
        <div
          className="absolute right-[16px] top-[24px] -m-[10px] cursor-pointer p-[10px]"
          onClick={() => {}}
        >
          <UIIconsCross className="rotate-45" />
        </div>
      </Link>

      <div className="mx-[16px] mt-[18px] flex h-dvh flex-col laptop:mx-[30px] laptop:mt-[30px]">
        <div className="flex h-[36px] w-full bg-[#252527] laptop:h-[90px]">
          <h2 className="self-baseline font-romie text-[19px] font-normal text-white laptop:text-[54px]">
            Abou<span className="ss01">t</span> me
          </h2>
        </div>

        <div className="h-[calc(100dvh-56px)] overflow-y-scroll pb-[16px] laptop:pb-[46px]">
          <Image
            unoptimized
            src={InfosEmilieJpg}
            alt="Emilie"
            className="mt-[16px] w-full laptop:hidden"
          />

          <p className="mr-[20px] mt-[30px] leading-[24px] laptop:mt-[20px] laptop:leading-[20px]">
            Emilie Vizcano is an Art Director who mainly work within a focus
            image and strategy, from conception to expression. Having a
            particular interest for Luxury fashion and tech fields, it's been
            now +5 years experience working with design studios or enterprises
            for several clients such as Nina Ricci, Ledger, Kraken, Sony, Louis
            Vuitton, Nike, La Bourse du Commerce, Universal Music, and many
            more.
            <br />
            <br />
            After living in Netherlands, she used to work in Paris and now
            swinging in between South of France and the capital.
            <br />
            <br />
            From there, she works with photographers, stylists, and 3D artists.
            She design campaigns and experiences for brands, agencies,
            institutions and independants artists crafting images, making custom
            typefaces, and shaping compelling narratives.
            <br />
            <br />
            For projects inquiries, write at{' '}
            <a href="mailto:contact@emilievizcano.com" className="underline">
              contact@emilievizcano.com
            </a>
          </p>

          <div className="mt-[20px] flex justify-between laptop:mt-[45px]">
            <div>
              <div className="flex items-center">
                <RightArrowSvg className="w-[18px] fill-current text-white" />
                <p className="ml-[6px] uppercase">services</p>
              </div>

              <div className="mt-[8px] flex max-w-[360px] flex-wrap">
                {CONSTANT_SERVICES.map((service, index) => (
                  <div key={index} className="mr-[8px] mt-[8px]">
                    <UIPill label={service} />
                  </div>
                ))}
              </div>

              <div className="mt-[20px] flex items-center laptop:mt-[25px]">
                <RightArrowSvg className="w-[18px] fill-current text-white" />
                <p className="ml-[6px] uppercase">softwares</p>
              </div>

              <div className="mt-[8px] flex max-w-[360px] flex-wrap laptop:mt-[17px]">
                {CONSTANT_SOFTWARES.map((service, index) => (
                  <div key={index} className="mr-[8px] mt-[8px]">
                    <UIPill label={service} />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden laptop:block">
              <Image
                unoptimized
                src={InfosEmilieJpg}
                alt="Emilie"
                className="w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

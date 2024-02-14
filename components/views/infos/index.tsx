import UIIconsCross from 'components/ui/icons/cross';
import UIPill from 'components/ui/pill';
import RightArrowSvg from 'icons/right-arrow.svg';
import InfosEmilieJpg from 'images/infos/emilie.jpg';
import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  'Art direction',
  'Branding 360°',
  'Custom typefaces',
  'Custom logotypes',
  'UX/UI',
  'Websites',
  'Creative coding',
  'Book design',
  'Consulting',
];
const SOFTWARES = [
  'Figma',
  'Adobe Suite',
  'Jira',
  'Asana',
  'Notion',
  'Slack',
  'Glyphs',
  'Fontlab',
];

export default function InfosView() {
  return (
    <div className="laptop:w-[820px] laptop:text-[15px] relative h-full w-screen bg-[#252527] text-[16px] font-light text-white">
      <Link href="/">
        <div
          className="absolute right-[16px] top-[24px] -m-[10px] cursor-pointer p-[10px]"
          onClick={() => {}}
        >
          <UIIconsCross className="rotate-45" />
        </div>
      </Link>

      <div className="laptop:mx-[30px] laptop:mt-[30px] mx-[16px] mt-[18px] flex h-dvh flex-col">
        <div className="laptop:h-[90px] flex h-[36px] w-full bg-[#252527]">
          <h2 className="font-romie laptop:text-[54px] self-baseline text-[19px] font-normal text-white">
            Abou<span className="ss01">t</span> me
          </h2>
        </div>

        <div className="laptop:pb-[46px] h-[calc(100dvh-56px)] overflow-y-scroll pb-[16px]">
          <Image
            unoptimized
            src={InfosEmilieJpg}
            alt="Emilie"
            className="laptop:hidden mt-[16px] w-full"
          />

          <p className="laptop:mt-[20px] laptop:leading-[20px] mr-[20px] mt-[30px] leading-[24px]">
            I am a multidisciplinary graphic designer who mainly work within
            brand and art direction, with a focus on type and web. Having a
            particular interest for fashion and tech fields, it's now been 5
            years that I work as a freelancer, in design studios or enterprises
            for several clients such as Nike, Ledger, Sony, Louis Vuitton, La
            Bourse du Commerce, and more.
            <br />
            After living in Netherlands for a year, used to work in Paris for 3
            years, and I now swing in between Bordeaux and the capital.
            <br />
            <br />
            FYI : I'm a dog person, I like flowers, cinema, vintage things,
            beautiful typography and video games.
          </p>

          <div className="laptop:mt-[45px] mt-[20px] flex justify-between">
            <div>
              <div className="flex items-center">
                <RightArrowSvg className="w-[18px] fill-current text-white" />
                <p className="ml-[6px] uppercase">services</p>
              </div>

              <div className="mt-[8px] flex max-w-[360px] flex-wrap">
                {SERVICES.map((service, index) => (
                  <div key={index} className="mr-[8px] mt-[8px]">
                    <UIPill label={service} />
                  </div>
                ))}
              </div>

              <div className="laptop:mt-[25px] mt-[20px] flex items-center">
                <RightArrowSvg className="w-[18px] fill-current text-white" />
                <p className="ml-[6px] uppercase">softwares</p>
              </div>

              <div className="laptop:mt-[17px] mt-[8px] flex max-w-[360px] flex-wrap">
                {SOFTWARES.map((service, index) => (
                  <div key={index} className="mr-[8px] mt-[8px]">
                    <UIPill label={service} />
                  </div>
                ))}
              </div>
            </div>
            <div className="laptop:block hidden">
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

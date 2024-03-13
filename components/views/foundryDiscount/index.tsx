import { postApiDiscount } from 'flux/foundry/action';
import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import RightArrowSvg from 'icons/right-arrow.svg';
import ChatPng from 'images/foundry/discount/chat.png';
import DragonPng from 'images/foundry/discount/dragon.png';
import GameboyPng from 'images/foundry/discount/gameboy.png';
import LeafBottom1Png from 'images/foundry/discount/leaf-bottom-1.png';
import LeafBottom2Png from 'images/foundry/discount/leaf-bottom-2.png';
import LeafLeftPng from 'images/foundry/discount/leaf-left.png';
import LeafRightPng from 'images/foundry/discount/leaf-right.png';
import MachinePng from 'images/foundry/discount/machine.png';
import PhoPng from 'images/foundry/discount/pho.png';
import Sinnoh1Png from 'images/foundry/discount/sinnoh-1.png';
import Sinnoh2Png from 'images/foundry/discount/sinnoh-2.png';
import TournesolLeftPng from 'images/foundry/discount/tournesol-left.png';
import TournesolRightPng from 'images/foundry/discount/tournesol-right.png';
import VasePng from 'images/foundry/discount/vase.png';
import { useEffect, useRef, useState } from 'react';
import { ModalEnum } from 'types/modal';
import { DiscountSymbols } from 'utils/constants';
import FoundryDiscountColumn, { FoundryDiscountColumnHandle } from './column';
import FoundryDiscountDecoration from './decoration';

const images = [
  MachinePng,
  LeafBottom1Png,
  LeafBottom2Png,
  LeafLeftPng,
  LeafRightPng,
  TournesolLeftPng,
  TournesolRightPng,
  ChatPng,
  DragonPng,
  GameboyPng,
  PhoPng,
  Sinnoh1Png,
  Sinnoh2Png,
  VasePng,
];

export default function FoundryDiscountView() {
  const [progress, setProgress] = useState<number>(0);
  const dispatch = useAppDispatch();
  const machineRef = useRef<HTMLImageElement>(null);
  const [[machineWidth, machineHeight], setMachineSize] = useState<
    [number, number]
  >([0, 0]);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const getImageSize = (img: HTMLImageElement) => {
    const ratio = img.naturalWidth / img.naturalHeight;
    let width = img.height * ratio;
    let height = img.height;
    if (width > img.width) {
      width = img.width;
      height = img.width / ratio;
    }
    setMachineSize([width, height]);
  };
  const line1Ref = useRef<FoundryDiscountColumnHandle>(null);
  const line2Ref = useRef<FoundryDiscountColumnHandle>(null);
  const line3Ref = useRef<FoundryDiscountColumnHandle>(null);

  useEffect(() => {
    if (machineRef.current && machineRef.current.complete) {
      getImageSize(machineRef.current);
    }
    const onResize = () => {
      if (machineRef.current && machineRef.current.complete) {
        getImageSize(machineRef.current);
      }
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onClickPull = async () => {
    if (isAnimated) return;
    setIsAnimated(true);
    try {
      const res = await dispatch(postApiDiscount()).unwrap();
      let symbols;
      if (res?.discount) {
        symbols = [res.symbol, res.symbol, res.symbol];
        setTimeout(() => {
          dispatch(
            openModal(ModalEnum.FoundryDiscountAlert, {
              description: res.description,
              discount: res.discount,
            }),
          );
          setIsAnimated(false);
        }, 7500);
      } else {
        const numberOfSymbols = Object.keys(DiscountSymbols).length - 1;
        symbols = [
          Object.values(DiscountSymbols)[
            Math.floor(Math.random() * numberOfSymbols)
          ],
          Object.values(DiscountSymbols)[
            Math.floor(Math.random() * numberOfSymbols)
          ],
          Object.values(DiscountSymbols)[
            Math.floor(Math.random() * numberOfSymbols)
          ],
        ];
        setTimeout(() => {
          dispatch(
            openModal(ModalEnum.FoundryDiscountAlert, {
              description:
                'Sorry! You did not win anything this time, but you can try again tomorrow!',
            }),
          );
          setIsAnimated(false);
        }, 7500);
      }
      line1Ref.current?.setSymbol(symbols[0], 30);
      line2Ref.current?.setSymbol(symbols[1], 50);
      line3Ref.current?.setSymbol(symbols[2], 70);
    } catch (err) {
      dispatch(
        openModal(ModalEnum.FoundryDiscountAlert, {
          description:
            'Sorry! You already played today, but you can try again tomorrow!',
        }),
      );
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    let imageLoaded = 0;
    images.forEach((image) => {
      const img = new Image();
      img.onload = () => {
        imageLoaded += 1;
        setProgress((imageLoaded / images.length) * 100);
      };
      img.src = image.src;
    });
  }, []);

  return (
    <div className="pointer-events-none flex-1 overflow-hidden">
      {progress >= 100 ? (
        <div className="relative h-full laptop:py-[30px]">
          <div className="relative h-full">
            <img
              onLoad={(e) => {
                getImageSize(e.target as HTMLImageElement);
              }}
              ref={machineRef}
              src={MachinePng.src}
              alt="chat"
              className="mx-auto h-full w-full object-contain"
            />
            <button
              className="pointer-events-auto absolute left-[calc(50vw+30vh)] top-[45%] flex h-[20px] w-[20px] select-none items-center justify-center rounded-full bg-[#B4AFAB] font-romie text-[12px] uppercase text-white outline-none laptop:h-auto laptop:w-auto laptop:px-[20px] laptop:py-[6px] portrait:left-auto portrait:right-[8vw] portrait:top-[calc(50%-7vw)]"
              onClick={onClickPull}
              disabled={isAnimated}
            >
              <RightArrowSvg className="w-[10px] rotate-90 fill-current text-white laptop:hidden" />
              <p className="hidden laptop:block">Pull</p>
            </button>

            <div
              className="absolute z-10 grid grid-cols-3 gap-[3%]"
              style={{
                width: `${machineWidth * 0.522}px`,
                height: `${machineHeight * 0.35}px`,
                top: `calc(50% - ${machineHeight * 0.304}px)`,
                left: `calc(50% - ${machineWidth * 0.26}px)`,
              }}
            >
              <FoundryDiscountColumn ref={line1Ref} />
              <FoundryDiscountColumn ref={line2Ref} />
              <FoundryDiscountColumn ref={line3Ref} />
            </div>
          </div>
          <FoundryDiscountDecoration />
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <p className="text-center font-romie text-[45px]">
            {Math.round(progress)}
          </p>
        </div>
      )}
    </div>
  );
}

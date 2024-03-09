import MachinePng from 'images/foundry/discount/machine.png';
import { useEffect, useRef, useState } from 'react';
import FoundryDiscountDecoration from './decoration';

export default function FoundryDiscountView() {
  const machineRef = useRef<HTMLImageElement>(null);
  const [[machineWidth, machineHeight], setMachineSize] = useState<
    [number, number]
  >([0, 0]);
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

  return (
    <div className="flex-1 overflow-hidden">
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
          <button className="absolute left-[calc(50vw+30vh)] top-[45%] rounded-full bg-[#B4AFAB] px-[20px] py-[6px] font-romie text-[12px] uppercase text-white outline-none portrait:left-auto portrait:right-[2vw] portrait:top-[calc(50%-7vw)]">
            Pull
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
            <div className="bg-[#FF0000] bg-opacity-50" />
            <div className="bg-[#FF0000] bg-opacity-50" />
            <div className="bg-[#FF0000] bg-opacity-50" />
          </div>
        </div>
        <FoundryDiscountDecoration />
      </div>
    </div>
  );
}

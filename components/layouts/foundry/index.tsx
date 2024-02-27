'use client';

import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import EmilieVizcanoSvg from 'icons/emilievizcano.svg';
import { ModalEnum } from 'types/modal';

type LayoutFoundryProps = {
  children: React.ReactNode;
};

export default function LayoutFoundry({ children }: LayoutFoundryProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed left-0 top-0 flex h-dvh min-h-full w-full flex-col overflow-y-scroll font-light text-[#383838]">
      <EmilieVizcanoSvg className="mx-auto mt-[22px] w-[70px] shrink-0 fill-current text-[#383838] laptop:w-[110px]" />
      <p className="text-center font-romie text-[20px] laptop:text-[35px]">
        T<span className="ss01">y</span>pe Foundr<span className="ss01">y</span>
      </p>
      <div
        className="absolute right-[16px] top-[20px] m-[-10px] cursor-pointer p-[10px] laptop:right-[30px] laptop:top-[26px]"
        onClick={() => {
          dispatch(openModal(ModalEnum.FoundryMenu));
        }}
      >
        <div className="h-px w-[20px] bg-[#383838] laptop:w-[30px]" />
        <div className="mt-[8px] h-px w-[20px] bg-[#383838] laptop:w-[30px]" />
      </div>
      {children}
    </div>
  );
}

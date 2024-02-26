'use client';

import { openModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import EmilieVizcanoSvg from 'icons/emilievizcano.svg';
import { ModalEnum } from 'types/modal';
import FoundryFooter from './footer';

type LayoutFoundryProps = {
  children: React.ReactNode;
};

export default function LayoutFoundry({ children }: LayoutFoundryProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed left-0 top-0 flex h-dvh min-h-full w-full flex-col overflow-y-scroll font-light text-[#383838]">
      <EmilieVizcanoSvg className="mx-auto mt-[22px] w-[70px] shrink-0 fill-current text-[#383838] laptop:w-[110px]" />
      <div
        className="fixed right-[16px] top-[20px] m-[-10px] cursor-pointer p-[10px] laptop:right-[30px] laptop:top-[26px]"
        onClick={() => {
          dispatch(openModal(ModalEnum.FoundryMenu));
        }}
      >
        <div className="h-px w-[20px] bg-[#383838] laptop:w-[30px]" />
        <div className="mt-[8px] h-px w-[20px] bg-[#383838] laptop:w-[30px]" />
      </div>
      {children}
      <FoundryFooter />
    </div>
  );
}

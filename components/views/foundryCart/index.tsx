import UIIconsCross from 'components/ui/icons/cross';
import { closeModal } from 'flux/modal/reducer';
import { useAppDispatch } from 'flux/store';
import { ModalEnum } from 'types/modal';

export default function FoundryCartView() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative h-full w-screen max-w-[820px] bg-[#252527] text-[16px] font-light text-[#898989] laptop:text-[15px]">
      <div
        className="absolute right-[12px] top-[20px] -m-[10px] cursor-pointer p-[10px]"
        onClick={() => {
          dispatch(closeModal(ModalEnum.FoundryCart));
        }}
      >
        <UIIconsCross className="rotate-45" classNameLines="bg-[#383838]" />
      </div>
    </div>
  );
}

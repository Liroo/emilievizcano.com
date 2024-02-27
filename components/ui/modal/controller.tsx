import { cloneElement } from 'react';

import UIModal from 'components/ui/modal';

import { closeModal } from 'flux/modal/reducer';
import { selectModalById } from 'flux/modal/selector';
import { useAppDispatch, useAppSelector } from 'flux/store';

import { ModalEnum } from 'types/modal';

interface UIModalControllerProps {
  /** string modal id for redux */
  modalId: ModalEnum;
  /** Modal component children */
  children: any;
  /** When modal is closing */
  onClickBackground?: () => void;
  /** className */
  className?: string;
  /** background className */
  backgroundClassName?: string;
  /** animation */
  animation?: { initial: any; animate: any; exit: any };
}

export default function UIModalController({
  modalId,
  children,
  onClickBackground,
  className,
  backgroundClassName,
  animation,
}: UIModalControllerProps) {
  const modal = useAppSelector(selectModalById(modalId));
  const dispatch = useAppDispatch();

  const onClickBackgroundUIModal = () => {
    dispatch(closeModal(modalId));
    onClickBackground?.();
  };

  return (
    <UIModal
      onClickBackground={onClickBackgroundUIModal}
      show={modal?.show}
      className={className}
      backgroundClassName={backgroundClassName}
      animation={animation}
    >
      {cloneElement(children, {
        ...(modal?.data ?? {}),
      })}
    </UIModal>
  );
}

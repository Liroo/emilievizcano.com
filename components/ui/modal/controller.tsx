import { cloneElement, useCallback } from 'react';

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
  /** x or y animation */
  animation?: 'x' | 'y';
}

export default function UIModalController({
  modalId,
  children,
  onClickBackground,
  animation = 'x',
}: UIModalControllerProps) {
  const modal = useAppSelector(selectModalById(modalId));
  const dispatch = useAppDispatch();

  const onClickBackgroundUIModal = useCallback(() => {
    dispatch(closeModal(modalId));
    onClickBackground?.();
  }, [modalId]);

  return (
    <UIModal
      onClickBackground={onClickBackgroundUIModal}
      show={modal?.show}
      animation={animation}
    >
      {cloneElement(children, {
        ...(modal?.data ?? {}),
      })}
    </UIModal>
  );
}

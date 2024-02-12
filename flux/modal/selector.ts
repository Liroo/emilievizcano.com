import { createSelector } from 'reselect';

import { AppState } from 'flux/store';

const selectModalReducer = (state: AppState) => state.modal;

export const selectIsOneModalOpen = createSelector(
  [selectModalReducer],
  (modalReducer) => {
    return Object.values(modalReducer).some((modal) => modal.show);
  },
);

export const selectModalById = (modalId: string) =>
  createSelector([selectModalReducer], (modalReducer) => {
    return modalReducer[modalId];
  });

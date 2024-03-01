import { createSelector } from 'reselect';

import { AppState } from 'flux/store';

const selectProductReducer = (state: AppState) => state.product;

export const selectProductByHandle = (handle: string) =>
  createSelector([selectProductReducer], (projectReducer) => {
    return projectReducer.products[handle];
  });

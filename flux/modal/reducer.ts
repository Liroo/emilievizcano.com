import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { ModalEnum } from 'types/modal';

export type ModalState = {
  [id: string]: {
    show: boolean;
    data?: any;
  };
};

const initialState: ModalState = {};
Object.keys(ModalEnum).forEach((key: string) => {
  initialState[ModalEnum[key]] = {
    show: false,
  };
});

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: {
      reducer: (
        state,
        action: PayloadAction<
          ModalEnum,
          string,
          {
            data?: any;
            animated?: boolean;
          }
        >,
      ) => {
        state[action.payload] = {
          ...state[action.payload],
          show: true,
          data: action.meta.data,
        };
      },
      prepare(
        modalId: ModalEnum,
        { data, animated }: { data?: any; animated?: boolean } = {},
      ) {
        return {
          payload: modalId,
          meta: { data, animated },
        };
      },
    },
    closeModal: {
      reducer: (
        state,
        action: PayloadAction<ModalEnum, string, { animated?: boolean }>,
      ) => {
        state[action.payload] = {
          ...state[action.payload],
          show: false,
        };
      },
      prepare(modalId: ModalEnum, { animated }: { animated?: boolean } = {}) {
        return {
          payload: modalId,
          meta: { animated },
        };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      Object.keys(ModalEnum).forEach((key: string) => {
        state[ModalEnum[key]] = {
          ...state[ModalEnum[key]],
          ...((action as any).payload.modal[ModalEnum[key]].show
            ? (action as any).payload.modal[ModalEnum[key]]
            : ({} as any)),
        };
      });
    });
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;

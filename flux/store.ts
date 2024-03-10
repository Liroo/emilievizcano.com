import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Action, combineReducers } from 'redux';
import modalSlice from './modal/reducer';
import productSlice from './product/reducer';
import projectSlice from './project/reducer';

const reducers = {
  [modalSlice.name]: modalSlice.reducer,
  [projectSlice.name]: projectSlice.reducer,
  [productSlice.name]: productSlice.reducer,
};

const makeStore = () =>
  configureStore({
    reducer: combineReducers(reducers),
    devTools: true,
  });
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);

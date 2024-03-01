import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@shopify/hydrogen-react/storefront-api-types';

import { HYDRATE } from 'next-redux-wrapper';

export type ProductState = {
  products: {
    [handle: string]: Partial<Product>;
  };
};

const initialState: ProductState = {
  products: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.products[action.payload.handle] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...(action as any).payload.product,
      };
    });
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice;

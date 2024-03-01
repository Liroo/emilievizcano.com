import { createAsyncThunk } from '@reduxjs/toolkit';
import { shopifyClient } from 'services/shopify';
import { queryProductByHandle } from 'services/shopify/queries/product';
import { setProduct } from './reducer';

export const getProductByHandle = createAsyncThunk<void, { handle: string }>(
  'product/getProductByHandle',
  async ({ handle }, { dispatch }) => {
    const { data } = await shopifyClient.request(queryProductByHandle, {
      variables: { handle },
    });

    const product = data?.product;
    if (product) dispatch(setProduct(product));
  },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { DiscountSymbols } from 'utils/constants';

export const postApiDiscount = createAsyncThunk<
  { symbol: DiscountSymbols; discount: string; description: string } | null,
  void
>('foundry/postApiDiscount', async () => {
  const response = await fetch('/api/discount', {
    method: 'POST',
  });

  const res = await response.json();

  if (res.error) {
    throw new Error(res.error);
  }
  return res?.discount;
});

import { createAsyncThunk } from '@reduxjs/toolkit';

export const postApiDiscount = createAsyncThunk<void, void>(
  'foundry/postApiDiscount',
  async () => {
    const response = await fetch('/api/discount', {
      method: 'POST',
    });

    const data = await response.json();

    console.log(data);
  },
);

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/Redux/store';

interface PayPalInputState {
  email: string;
}

const initialState: PayPalInputState = {
  email: '',
};

export const paypalSlice = createSlice({
  name: 'paypal',
  initialState,
  reducers: {
    setPaypalEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setPaypalEmail } = paypalSlice.actions;

export const selectEmail = (state: RootState) => state.paypal.email;

export default paypalSlice.reducer;

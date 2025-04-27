import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/Redux/store';

interface VisaState {
  cardName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const initialState: VisaState = {
  cardName: '',
  cardNumber: '',
  expirationDate: '',
  cvv: '',
};

export const creditCardSlice = createSlice({
  name: 'creditCard',
  initialState,
  reducers: {
    setCardName: (state, action: PayloadAction<string>) => {
      state.cardName = action.payload;
    },
    setCardNumber: (state, action: PayloadAction<string>) => {
      state.cardNumber = action.payload;
    },
    setExpirationDate: (state, action: PayloadAction<string>) => {
      state.expirationDate = action.payload;
    },
    setCvv: (state, action: PayloadAction<string>) => {
      state.cvv = action.payload;
    },
  },
});

export const { setCardName, setCardNumber, setExpirationDate, setCvv } =
  creditCardSlice.actions;

export const selectCardInfo = (state: RootState) => state.creditCard;

export default creditCardSlice.reducer;

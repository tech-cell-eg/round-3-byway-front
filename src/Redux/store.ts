import { configureStore } from '@reduxjs/toolkit';
import { paypalSlice } from './slices/payment/paypalSlice';
import { creditCardSlice } from './slices/payment/creditCardSlice';
export const store = configureStore({
  reducer: {
    paypal: paypalSlice.reducer,
    creditCard: creditCardSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

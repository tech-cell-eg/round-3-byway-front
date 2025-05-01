import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/Redux/store';
import { IUserSave } from '@/types/types';

const initialState: IUserSave = {
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  role: '',
  updated_at: '',
  created_at: '',
  id: 0,
  token: '',
  bio: '',
  title: '',
  avatar: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUserRedux: (state, action: PayloadAction<IUserSave>) => {
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.updated_at = action.payload.updated_at;
      state.created_at = action.payload.created_at;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.bio = action.payload.bio;
      state.title = action.payload.title;
      state.avatar = action.payload.avatar;
    },
    setUserRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    reduxLogout: () => initialState,
  },
});

export const { saveUserRedux, setUserRole } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;

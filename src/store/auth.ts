import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { IAuth } from '../types';

const initialState: IAuth = { isAuth: false, email: null };

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<IAuth>) => {
      state.isAuth = payload.isAuth;
      state.email = payload.email;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setIsAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;

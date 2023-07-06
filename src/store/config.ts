import { DEFAULT_LANGUAGE } from '../constants';
import { TAppLanguage, IConfig } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IConfig = { language: DEFAULT_LANGUAGE };

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAppLanguage: (state, { payload }: PayloadAction<TAppLanguage>) => {
      state.language = payload;
    },
  },
});

export const configReducer = configSlice.reducer;

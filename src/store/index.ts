import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { configReducer } from './config';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import graphQlQueryReducer from './reducers/graphQlSlice';
import { graphQlApi } from './reducers/graphQlApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    config: configReducer,
    graphQl: graphQlQueryReducer,
    [graphQlApi.reducerPath]: graphQlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(graphQlApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

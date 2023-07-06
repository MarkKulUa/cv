import { useMemo } from 'react';
import { useAppDispatch } from './redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { graphQlQueryReducer } from '../store/reducers/graphQlSlice';
const rootActions = {
  ...graphQlQueryReducer.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

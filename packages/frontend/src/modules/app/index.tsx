import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@mui/material';
import ModalProvider from 'mui-modal-provider';

import { MainRouter } from '../navigation';

import { theme } from '../theme';
import * as Styled from './app.styled';
import '../../style.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Styled.GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <MainRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </ModalProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;

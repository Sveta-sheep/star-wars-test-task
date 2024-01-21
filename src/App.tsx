import { Box, SxProps, ThemeProvider } from '@mui/material';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorFallbackUI, ToastProvider } from 'components';
import { errorHandler } from 'helpers/errorHandler';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RootRouters } from 'routers';
import { theme } from 'styles/theme';

const sx: SxProps = {
  backgroundColor: 'secondary.main',
  minHeight: '100vh',
  padding: 4,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
  queryCache: new QueryCache({
    onError: errorHandler,
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box sx={sx}>
          <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
            <RootRouters />
            <ToastProvider />
          </ErrorBoundary>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

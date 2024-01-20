import { Box, SxProps } from '@mui/material';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorFallbackUI, ToastProvider } from 'components';
import { errorHandler } from 'helpers/errorHandler';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RootRouters } from 'routers';

const sx: SxProps = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
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
      <Box sx={sx}>
        <ErrorBoundary FallbackComponent={ErrorFallbackUI}>
          <RootRouters />
          <ToastProvider />
        </ErrorBoundary>
      </Box>
    </QueryClientProvider>
  );
}

export default App;

import { Button, Stack, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallbackUI = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Stack minHeight='100vh' alignItems='center'>
    <Typography>{error}</Typography>
    <Button variant='outlined' onClick={resetErrorBoundary}>
      Try again
    </Button>
  </Stack>
);

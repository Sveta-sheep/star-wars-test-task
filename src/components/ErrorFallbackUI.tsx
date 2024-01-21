import { Button, Stack, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

export const ErrorFallbackUI = ({ error, resetErrorBoundary }: FallbackProps) => (
  <Stack minHeight='100vh' justifyContent='center' gap={1} alignItems='center'>
    <Typography>{error?.message}</Typography>
    <Button variant='outlined' onClick={resetErrorBoundary}>
      Try again
    </Button>
  </Stack>
);

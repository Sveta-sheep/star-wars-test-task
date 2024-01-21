import { CircularProgress, Stack } from '@mui/material';

export const Loader = () => (
  <Stack alignItems='center' p={3}>
    <CircularProgress color='primary' />
  </Stack>
);

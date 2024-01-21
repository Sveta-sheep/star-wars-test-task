import { SxProps } from '@mui/material';

export const wrapperSx: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid white',
  py: 2,
  cursor: 'pointer',
  transition: 'transform .2s ease-in-out',
  '&:hover': { opacity: 0.8, transform: 'scale(1.01)' },
  '&:active': { opacity: 0.7 },
};

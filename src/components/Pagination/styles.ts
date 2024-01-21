import { SxProps } from '@mui/material';

export const wrapperSx: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export const innerWrapperSx: SxProps = {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
};

export const iconSx: SxProps = {
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
};

export const pageItemSx: SxProps = {
  borderRadius: '50%',
  cursor: 'pointer',
  py: 0.5,
  px: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border .1s ease-in-out',
};

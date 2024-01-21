import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useIsMobile = (key: Breakpoint = 'sm') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(key));
};

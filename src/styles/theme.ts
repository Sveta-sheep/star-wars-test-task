import { createTheme } from '@mui/material';
import { StarWarsTheme } from 'styles/styled';

export const starWarsTheme: StarWarsTheme = {
  colors: {
    primary: '#edce32',
    secondary: '#282c34',
    white: '#fff',
    black: '#000',
    yellow: '#edce32',
  },
  fonts: {},
  sizes: {},
};

const { colors } = starWarsTheme;

export const theme = createTheme({
  ...starWarsTheme,
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    common: {
      black: colors.black,
      white: colors.white,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: colors.white,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

import 'styled-components';
import { AnyObject } from 'types';
import { StarWarsColorsType } from './types';

export interface StarWarsTheme {
  colors: StarWarsColorsType;
  fonts: AnyObject;
  sizes: AnyObject;
}

declare module '@mui/material/styles' {
  interface Theme extends StarWarsTheme {}
  interface ThemeOptions extends StarWarsTheme {}
}

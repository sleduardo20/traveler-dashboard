import { createStitches, defaultThemeMap } from '@stitches/react';
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  space,
  lineHeights,
} from './theme';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    space,
    lineHeights,
  } as const,
});

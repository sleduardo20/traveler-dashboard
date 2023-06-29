import { globalCss, theme } from '.';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  hmml: {
    fontSize: '62.5%',
  },

  'input,p,small': {
    fontSize: theme.fontSizes.sm,
  },

  button: {
    cursor: 'pointer',
  },

  body: {
    backgroundColor: theme.colors.background,
    fontFamily: theme.fonts.fontFamily,
    '-webkit-font-smoothing': 'antialiased',
  },
});

const tokens = {
  colors: {
    background: '#F5F8FA',
    orange: '#F25D27',
    white: '#FFFFFF',
    black100: '#DCE2E5',
    text: '#617480',
    textComplements: '#A0ACB2',
    textTitle: '#123952',
    green: '#51B853',
    orangeLow: '#FFA585',
  },
  fontSizes: {
    sm: '1.6rem',
    xsm: '1.4rem',
    md: '2rem',
    lg: '3.6rem',
    xlg: '4rem',
    xxlg: '5.4rem',
  },
  fontWeights: {
    bold: 600,
    normal: 400,
  },
  fonts: {
    fontFamily: 'Barlow',
  },

  lineHeights: {
    xxxsm: '0.4rem',
    xxsm: '0.8rem',
    xsm: '1.6rem',
    sm: '2rem',
    md: '2.4rem',
    lg: '3.2rem',
    xlg: '3.6rem',
    xxlg: '4rem',
    xxxlg: '5.4rem',
  },
  space: {
    xxxsm: '0.4rem',
    xxsm: '0.8rem',
    xsm: '1.6rem',
    sm: '2rem',
    md: '2.4rem',
    lg: '3.2rem',
    xlg: '3.6rem',
    xxlg: '4rem',
    xxxlg: '5.4rem',
  } as const,
} as const;

export const { colors, fontSizes, lineHeights, fontWeights, fonts, space } =
  tokens;

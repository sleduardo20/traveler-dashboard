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

  space: {
    xxsm: '0.4rem',
    xsm: '0.8rem',
    sm: '1.6rem',
    md: '2rem',
    lg: '3.6rem',
    xlg: '4rem',
    xxlg: '5.4rem',
  },
} as const;

export const { colors, fontSizes, fontWeights, fonts, space } = tokens;

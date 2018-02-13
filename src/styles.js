const breakPoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xlg: '1200px',
};

const colors = {
  blue: '#1a4167',
  darkBlue: '#022c55',
  lightBlue: '#105194',
  gold: '#b9972f',
  lightGold: '#dfc253',
  manila: '#f1d592',
  white: 'white',

};

const fonts = {
  baseFont: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    textDecoration: 'none',
    color: 'black',
  },
};

const header = {
  backgroundColor: colors.blue,
  color: colors.white,
  height: '50px',
};

const a11y = {
  focusOutline: `1px solid ${colors.gold} !important`,
  altOutline: '1px solid red !important',
};

export default {
  fonts,
  header,
  a11y,
  breakPoints,
};


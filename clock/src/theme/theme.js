import { darken, lighten } from "polished";

const colors = {
  teal: 'teal',
  bg: '#2a2c2d',
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  primary: "#06c",
  secondary: "#096",
  danger: "#f60",
  text: {
    light: "#fff",
    dark: '#222'
  }
};

const boxShadow = `rgba(0, 0, 0, 0.24) 0px 3px 8px inset`;
const boxShadowHover = `rgba(0, 0, 0, 0.24) 0px 3px 8px`;

const radii = [0, 2, 4, 8, 16, 32, 64];

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const buttonStyles = {
  border: `3px solid`,
  borderRadius: radii[6],
  color: colors.text.light,
  padding: space[4],
  margin: space[2],
  "&:active": {
    transform: `translateY(3px)`
  },
  boxShadow,
  transition: "all .1s cubic-bezier(0.61, 1, 0.88, 1)",
  "@media screen and (prefers-reduced-motion: reduce)": {
    transition: "none"
  }
};

const numberLineStyles = {
  backgroundColor: colors.primary,
  width: "5em",
  paddingTop: "0.5em",
  paddingBottom: "0.5em",
  borderRadius: radii[3],
  boxShadow: `
    rgba(50, 50, 93, 0.25) 0px 30px 60px - 12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px - 18px inset
  `,
  transition: '0.5s cubic-bezier(0.25, 0.8, 0.25, 1.75)',
  float: 'left',
  marginLeft: '10px',
  marginRight: '10px'
//     background-color: var(--color - accent);
// width: var(--line - width);
// padding - top: 0.5em; /* 1em */
// padding - bottom: 0.5em; /* 1em */
// border - radius: calc(var(--border - radius) * 2);
// box - shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px - 12px inset,
//   rgba(0, 0, 0, 0.3) 0px 18px 36px - 18px inset;
// /* transition: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1.75); */
// float: left;
// margin - left: var(--spacing);
// margin - right: var(--spacing);
//   /* transition: 0.6s cubic-bezier(0.65, 0, 0.35, 1); */
};

export default {
  colors,
  space,
  radii,
  numberLines: {
    hours: {
      ...numberLineStyles,
    },
    minutes: {
      ...numberLineStyles,
    },
    seconds: {
      ...numberLineStyles,
    }
  },
  buttons: {
    primary: {
      ...buttonStyles,
      borderColor: darken(0.05, colors.primary),
      backgroundColor: colors.primary,
      "&:hover": {
        borderColor: lighten(0.1, colors.primary),
        backgroundColor: lighten(0.05, colors.primary),
        cursor: 'pointer',
        boxShadow: boxShadowHover,
      }
    },
    secondary: {
      ...buttonStyles,
      borderColor: darken(0.05, colors.secondary),
      backgroundColor: colors.secondary,
      color: colors.text.light,
      "&:hover": {
        borderColor: lighten(0.1, colors.secondary),
        backgroundColor: lighten(0.05, colors.secondary),
        cursor: 'pointer',
        boxShadow: boxShadowHover,
      }
    },
    danger: {
      ...buttonStyles,
      borderColor: darken(0.05, colors.danger),
      backgroundColor: colors.danger,
      "&:hover": {
        borderColor: lighten(0.1, colors.danger),
        backgroundColor: lighten(0.05, colors.danger),
        cursor: 'pointer',
        boxShadow: boxShadowHover,
      }
    }
  }
};

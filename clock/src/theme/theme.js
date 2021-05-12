import { darken, lighten } from "polished";

const colors = {
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

const space = [0, 2, 4, 8, 16, 32, 64];

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

export default {
  colors,
  space,
  radii,
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

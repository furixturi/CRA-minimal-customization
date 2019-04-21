import { Theme, createStyles } from "@material-ui/core";
import theme from "../../mui-themes/theme";
import { red } from "@material-ui/core/colors";

const generateStylesWithTheme = (theme: Theme) => createStyles({
  App: {
    textAlign: 'center',
    backgroundColor: '#ffffff'
  },

  AppLogo: {
    animation: 'App-logo-spin infinite 5s linear',
    height: '1em',
    pointerEvents: 'none',
    lineHeight: '1em',
    verticalAlign: 'middle'
  },

  AppHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main
  },

  AppLink: {
    color: '#61dafb'
  },

  fab: {},

  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

export default generateStylesWithTheme(theme);
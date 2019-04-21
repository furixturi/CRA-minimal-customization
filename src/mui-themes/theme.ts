import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { deepPurple, deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: deepOrange
  },
  typography: {
    useNextVariants: true,
  }
});

export default theme;
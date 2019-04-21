import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './styles';
import {
  WithStyles,
  MuiThemeProvider,
  withStyles,
  Typography
} from '@material-ui/core';
import theme from '../../mui-themes/theme';

interface Props extends WithStyles<typeof styles> {}
class App extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <Typography component="h1" variant="h3">
              Welcome to React
              <img
                src={logo}
                className={classes.AppLogo}
                alt="logo"
              />
            </Typography>

            <Typography component="p" variant="body2">
              Edit <code>src/App.tsx</code> and save to
              reload.
            </Typography>
            <Typography variant="body1">
              <a
                className={classes.AppLink}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Typography>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

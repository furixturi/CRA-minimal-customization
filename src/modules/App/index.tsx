import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <h2>Welcome to React</h2>
          <img
            src={logo}
            className={styles.AppLogo}
            alt="logo"
          />
          <p>
            Edit <code>src/App.tsx</code> and save to
            reload.
          </p>
          <a
            className={styles.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import './index.scss';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.app_header}>
        <img src={logo} className={styles.app_logo} alt="logo" />
        <a
          className="c-btn c-btn--primary"
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

export default App;

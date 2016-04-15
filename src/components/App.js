import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import Nav from './Nav';
import { StyleSheet, css } from 'aphrodite';
import { Type } from '../style';

const App = ({ children }) => {
  return (
    <div className={css(styles.root)}>
        <Helmet
          title="React Production Starter"
          titleTemplate="%s - React Production Starter"
        />
        <h1 className={css(styles.title)}>
          Redux Skeleton
        </h1>
        <Nav/>
      {children}
      <footer className={css(styles.footer)}>
        Copyright © 2016
      </footer>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
  },
  title: {
    color: '#000',
    maxWidth: 500,
    fontSize: 56,
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7',
  },
});

export default App;

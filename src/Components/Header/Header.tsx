import { A } from '@solidjs/router';
import type { Component } from 'solid-js';
import logo from '../../assets/svg/logo.svg';
import styles from './header.module.scss';

export const Header: Component = () => {
  return (
    <div class={styles.header}>
      <A class={styles.logo} href='/'>
        <img src={logo} alt="logo" />
      </A>
      <A class={styles.auth} href='/auth'>Login/Sign Up</A>
    </div>
  );
};

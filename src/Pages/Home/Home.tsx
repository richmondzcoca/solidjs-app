import type { Component } from 'solid-js';
import img from '../../assets/images/img1.webp';
import styles from './home.module.scss';

export const Home: Component = () => {
  return (
    <div class={styles.home}>
        <div class={styles.imageContainer}>
          <img src={img} alt="image" />
        </div>
    </div>
  );
};

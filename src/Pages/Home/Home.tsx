import type { Component } from 'solid-js';
import img from '../../assets/images/img1.webp';
import styles from './home.module.scss';
import ratingStar from '../../assets/svg/icon-star.svg';

const Home: Component = () => {
  return (
    <div class={styles.home}>
        <div class={styles.imageContainer}>
          <img src={img} alt="image" />
        </div>
        <div class={styles.container}>
          <div class={styles.title}>
            <h1>Dotonbori Ramen PH - Streetscape</h1>
            <h3>Asian,Ramen,Casual Dining</h3>
          </div>
          <div class={styles.ratingAndDistance}>
            <div class={styles.rating}>
              <img src={ratingStar} alt="Rating Star" />
              <span>4.1</span>
            </div>
            <div class={styles.distance}></div>
          </div>
        </div>
    </div>
  );
};

export default Home;
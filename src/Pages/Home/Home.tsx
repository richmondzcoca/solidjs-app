import { Component, createSignal } from 'solid-js';
import img from '../../assets/images/img1.webp';
import styles from './home.module.scss';
import ratingStar from '../../assets/svg/icon-star.svg';
import clock from '../../assets/svg/icon-clock.svg';
import promoTag from '../../assets/svg/icon-promo-tag.svg';
import { Modal } from '../../Components/Modal';

const Home: Component = () => {

  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const handleSeeDetails = () => {
    setIsModalOpen(!isModalOpen());
  }

  return (
    <div class={styles.home}>
        <div class={styles.imageContainer}>
          <img src={img} alt="image" />
        </div>
        <div class={styles.container}>
          <div class={styles.title}>
            <h1>Jollibee - Subangdaku M Logarta Ave</h1>
            <h3>Filipino,Chicken,Fast Food</h3>
          </div>
          <div class={styles.ratingAndDistance}>
            <div class={styles.rating}>
              <img src={ratingStar} alt="Rating Star" />
              <span>4.1</span>
            </div>
            <div class={styles.distance}>
              <img src={clock} alt="Clock" />
              <span>40 mins</span>
              <span class={styles.dot}>•</span>
              <span>8.4 km</span>
            </div>
          </div>
          <div class={styles.openingHours}>
            <span class={styles.text}>Opening Hours</span>
            <span>Today</span>
            <span class={styles.time}>00:00-23:59</span>
          </div>
          <div class={styles.promoWrapper}>
            <div class={styles.promo}>
              <img src={promoTag} alt="Promo Tag" />
              <span>Php100 off for a min spend of Php600 with promo code JOLLIBEE100</span>
            </div>
            <button onClick={handleSeeDetails}>See details</button>
            <Modal signal={{isModalOpen, setIsModalOpen}}>
              <h1>Hello Modal</h1>
              <p>Culpa exercitation dolor quis deserunt sunt proident in pariatur irure ullamco qui.</p>
            </Modal>
          </div>
        </div>
    </div>
  );
};

export default Home;
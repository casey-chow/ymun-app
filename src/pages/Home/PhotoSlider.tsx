import React from 'react';
import { IonSlides, IonSlide, IonImg, IonButton } from '@ionic/react';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  spaceBetween: 0,
  autoplay: true,
  loop: true,
};

const styles = {
  image: {
    width: '100vw',
    height: '50vh',
    objectFit: 'cover',
    position: 'relative',
  },
  button: {
    width: 'auto',
    height: '25px',
    position: 'absolute',
    zIndex: '99',
    bottom: '10px',
    right: '10px',
  },
};

/**
 * Generates and returns an image slide.
 * @param image the location of the image in our assets.
 * @param key the index of the image in our images list.
 * @returns an IonSlide containing an IonImg.
 */
const createSlide = (image: string, key: number): JSX.Element => {
  return (
    <IonSlide key={key}>
      <IonImg key={key} src={image} style={styles.image} />
      <IonButton
        color={'primary'}
        size={'small'}
        style={styles.button}
        href={'/posts'}
      >
        GALLERY
      </IonButton>
    </IonSlide>
  );
};

const PhotoSlider: React.FC = () => {
  // TODO: retrieve images from our backend.
  const images = [
    '/assets/2015.jpg',
    '/assets/turnup.jpg',
    '/assets/caucus.jpg',
    '/assets/liberators.jpg',
    '/assets/daboys.jpg',
  ];

  return (
    <IonSlides pager={false} options={slideOpts}>
      {images.map((image: string, i: number) => {
        return createSlide(image, i);
      })}
    </IonSlides>
  );
};

export default PhotoSlider;

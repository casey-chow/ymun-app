import React from 'react';
import { IonSlides, IonSlide, IonImg, IonButton } from '@ionic/react';
import { useResource } from 'rest-hooks';
import _ from 'lodash';
import GalleryResource from '../../resources/galleryPhoto';
import FileResource from '../../resources/file';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  spaceBetween: 0,
  freeMode: false,
  autoplay: true,
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
        color={'light'}
        fill={'outline'}
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
  const galleryPhotos = useResource(GalleryResource.listShape(), {});
  const files = useResource(FileResource.listShape(), {
    'filter[id][in]': galleryPhotos
      .map((x) => x.photo)
      .filter((x) => !_.isNull(x))
      .join(','),
  });
  const fileById = _.keyBy(files, 'id');

  return (
    <IonSlides pager={false} options={slideOpts}>
      {galleryPhotos.map((photo) => {
        return (
          photo.id &&
          fileById[photo.id] &&
          createSlide(fileById[photo.id].data.url, photo.id)
        );
      })}
    </IonSlides>
  );
};

export default PhotoSlider;

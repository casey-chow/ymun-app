import React, { useState } from 'react';

type SlideProps = {
  image: string;
  key: number;
};

type ArrowProps = {
  previousSlide?: () => void;
  nextSlide?: () => void;
};

const PhotoSlider: React.FC = () => {
  // TODO: retrieve images from our backend.
  // eslint-disable-next-line
  const [images, setImages] = useState(['/assets/liberators.jpg', '/assets/daboys.jpg']);
  const [index, setIndex] = useState(0);
  const [movement, setMovement] = useState(0);

  /**
   * Finds the photo slider and retrieves its width.
   * @returns the width of the photo slider if found, 0 otherwise.
   */
  const slideWidth = (): number => {
    const slide: Element | null = document.querySelector('.slide');
    return slide ? slide.clientWidth : 0;
  };

  /**
   * Moves the slider to the previous photo.
   */
  const previousSlide = (): void => {
    if (index !== 0) {
      setIndex(index - 1);
      setMovement(movement + slideWidth());
    }
  };

  /**
   * Moves the slider to the next photo.
   */
  const nextSlide = (): void => {
    // Move to the beginning of the array when we're at the end.
    if (index === images.length - 1) {
      setIndex(0);
      setMovement(0);
    } else {
      setIndex(index + 1);
      setMovement(movement - slideWidth());
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${movement}px)`,
          transition: 'transform ease-out 0.45s',
        }}
      >
        {images.map((image, i) => (
          <Slide image={image} key={i} />
        ))}
      </div>
      <LeftArrow previousSlide={previousSlide} />
      <RightArrow nextSlide={nextSlide} />
    </div>
  );
};

/**
 * Represents the current slide.
 * @param props.image the file path of the image.
 * @param props.key the index (id) of the image.
 * @returns JSX element representing a slide of an image.
 */
const Slide = (props: SlideProps): JSX.Element => {
  const styles = {
    backgroundImage: props.image,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };

  return <div className="slide" style={styles} />;
};

/**
 * Represents the left arrow overlayed on the current slide.
 * @param props.previousSlide the function to get the previous slide.
 * @returns JSX element representing a clickable left arrow.
 */
const LeftArrow = (props: ArrowProps): JSX.Element => {
  return (
    <div className="backArrow arrow" onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

/**
 * Represents the left arrow overlayed on the current slide.
 * @param props.nextSlide the function to get the previous slide.
 * @returns JSX element representing a clickable left arrow.
 */
const RightArrow = (props: ArrowProps): JSX.Element => {
  return (
    <div className="nextArrow arrow" onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default PhotoSlider;

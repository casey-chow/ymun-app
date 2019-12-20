import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostDetail from '../PostDetail/index';
import PostResource from '../../resources/post';
// import Swiper from 'swiper';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2,
  speed: 400,
  spaceBetween: 0,
};

// const swiper = new Swiper('.swiper-container', slideOpts);

const News: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});

  return (
    <IonSlides
      pager={posts.length > 2}
      options={slideOpts}
      onIonSlidesDidLoad={() => window.resizeBy(0.1, 0.1)}
    >
      {posts.map((post) => (
        <IonSlide key={post.id}>
          <PostDetail id={post.id} />
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default News;

import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  slidesPerView: 2,
  speed: 400,
  freeMode: false,
  spaceBetween: 0,
};

// const swiper = new Swiper('.swiper-container', slideOpts);

const News: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});

  return (
    <IonSlides pager={posts.length > 2} options={slideOpts}>
      {posts.map((post) => (
        <IonSlide key={post.id}>{/* <PostDetail id={post.id} /> */}</IonSlide>
      ))}
    </IonSlides>
  );
};

export default News;

import { IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';
import PostCard from './PostCard';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  slidesPerView: 2,
};

const News: React.FC = () => {
  const posts = useResource(PostResource.listShape(), { limit: 10 });

  return (
    <IonSlides pager={posts.length > 2} options={slideOpts}>
      {posts.map((post) => (
        <IonSlide key={post.id}>
          <PostCard post={post} />
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default News;

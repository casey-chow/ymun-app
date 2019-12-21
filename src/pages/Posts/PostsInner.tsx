import {
  IonContent,
  IonHeader,
  IonList,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';
import PostList from './PostList';

const PostsInner: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/press" text="Press" />
          </IonButtons>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList lines="full">
          {posts.map((post) => (
            <PostList key={post.id} post={post} />
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default PostsInner;

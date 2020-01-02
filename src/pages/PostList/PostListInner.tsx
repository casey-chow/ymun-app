import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';
import PostCard from './PostCard';

const PostListInner: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
          <IonButtons slot="primary">
            <IonButton routerLink="/press/gallery">Gallery »</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="post-list">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="background-inner">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </IonContent>
    </>
  );
};

export default PostListInner;

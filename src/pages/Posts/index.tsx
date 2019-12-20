import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';
import PostList from './PostList';

const Posts: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {posts.map((post) => (
            <PostList key={post.id} post={post} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Posts;

import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';

import PostResource from '../../resources/post';

const Posts: React.FC = () => {
  const posts = useResource(PostResource.listShape(), {});
  console.log(posts);

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
            <IonItem key={post.id} href={`/posts/${post.id}`}>
              <IonLabel>{post.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Posts;

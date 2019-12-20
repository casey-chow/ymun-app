import {
  IonBackButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React from 'react';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';

interface PostDetailInnerProps {
  id: string;
}

const PostDetailInner: React.FC<PostDetailInnerProps> = ({ id }) => {
  const post = useResource(PostResource.detailShape(), { id });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts" text="Posts" />
          </IonButtons>
          <IonTitle>What's News?</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCardTitle>{post.title}</IonCardTitle>
        <IonCardSubtitle>
          {post.created_by.first_name} {post.created_by.last_name}{' '}
          {post.created_on}
        </IonCardSubtitle>
        <IonImg src={post.header_image.data.url} />
        <Interweave content={post.body} />
      </IonContent>
    </>
  );
};
export default PostDetailInner;

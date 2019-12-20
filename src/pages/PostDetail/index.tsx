import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';
import React from 'react';
import Interweave from 'interweave';
import { RouteComponentProps } from 'react-router';
import { useResource } from 'rest-hooks';
import PostResource from '../../resources/post';

type PostDetailProps = RouteComponentProps<{
  id: string;
}>;

const PostDetail: React.FC<PostDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  const post = useResource(PostResource.detailShape(), { id });

  return (
    <IonPage>
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
        <IonImg src={post.header_image.data.url}></IonImg>
        <Interweave content={post.body} />
      </IonContent>
    </IonPage>
  );
};
export default PostDetail;

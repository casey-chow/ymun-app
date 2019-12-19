import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';
import * as React from 'react';
import PostResource from '../../resources/post';

import './PostDetail.scss';

interface PostDetailProps {
  readonly post: PostResource;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{post.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <article
          className="line-clamp"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        <IonButton size="small" href={`/posts/${post.id}`}>
          Read More
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default PostDetail;

import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import { thumbsUp } from 'ionicons/icons';
import React, { useCallback, useState } from 'react';
import { useFetcher, useResource } from 'rest-hooks';
import PostResource from '../../resources/post';
import UpvoteResource from '../../resources/upvote';

interface PostDetailInnerProps {
  id: string;
}

const PostDetailInner: React.FC<PostDetailInnerProps> = ({ id }) => {
  const post = useResource(PostResource.detailShape(), { id });
  const upvotes = useResource(UpvoteResource.listShape(), {
    'filter[post][=]': id,
  });

  const [didUpvote, setDidUpvote] = useState<boolean>(false);

  const upvoteFetcher = useFetcher(UpvoteResource.createShape(), true);
  const makeUpvote = useCallback(() => {
    upvoteFetcher({}, { post: parseInt(id, 10) }, [
      [
        UpvoteResource.listShape(),
        { 'filter[post][=]': id },
        (upvoteId: string, upvoteIds: string[] | undefined) => [
          ...(upvoteIds || []),
          upvoteId,
        ],
      ],
    ]);

    setDidUpvote(true);
  }, [id]);

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
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton size="small" onClick={makeUpvote} disabled={didUpvote}>
              <IonIcon slot="start" icon={thumbsUp} />
              Like
            </IonButton>
            <IonBadge color="primary">{upvotes.length}</IonBadge>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </>
  );
};
export default PostDetailInner;

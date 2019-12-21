import {
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
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
  }, [upvoteFetcher, id]);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts" text="Posts" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCardTitle>{post.title}</IonCardTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCardSubtitle>
                {post.created_by.first_name} {post.created_by.last_name}{' '}
                {post.created_on}
              </IonCardSubtitle>
            </IonCol>
          </IonRow>
          {post.header_image && (
            <IonRow>
              <IonCol>
                <div
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    width: 'auto',
                  }}
                >
                  <img src={post.header_image.data.url} />
                </div>
              </IonCol>
            </IonRow>
          )}
          <IonRow>
            <IonCol>
              <Interweave content={post.body} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar style={{ height: 'auto' }}>
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

import { IonCard, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import dayjs from 'dayjs';
// eslint-disable-next-line import/default
import relativeTime from 'dayjs/plugin/relativeTime';
import Interweave from 'interweave';
import React from 'react';
import { useResource } from 'rest-hooks';
import FileResource from '../../resources/file';
import PostResource from '../../resources/post';
import UpvoteResource from '../../resources/upvote';
import UserResource from '../../resources/user';

dayjs.extend(relativeTime);

interface PostListProps {
  readonly post: PostResource;
}

const PostCard: React.FC<PostListProps> = ({ post }) => {
  const [upvotes, author, headerImage] = useResource(
    [UpvoteResource.listShape(), { 'filter[post][=]': post.id }],
    [UserResource.detailShape(), { id: post.created_by }],
    [FileResource.detailShape(), { id: post.header_image }]
  );

  const thumbnail =
    headerImage &&
    headerImage.data.thumbnails.find(
      (thumb) => thumb.width === 300 && thumb.url.includes('crop')
    );

  return (
    <IonCard routerLink={`/posts/${post.id}`} className="post-card">
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            {thumbnail && <IonImg src={thumbnail.url} />}
          </IonCol>
          <IonCol>
            <h2>{post.title}</h2>
            <small>
              {author.first_name} {author.last_name}
              {' | '}
              {dayjs(post.created_on).fromNow()} | {upvotes.length} Likes
            </small>
            <div className="content">
              <Interweave content={post.body} />
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default PostCard;

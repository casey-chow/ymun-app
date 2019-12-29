import { IonCard, IonCardContent } from '@ionic/react';
import React from 'react';
import { useResource } from 'rest-hooks';
import FileResource from '../../resources/file';
import PostResource from '../../resources/post';

export interface PostCardProps {
  readonly post: PostResource;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const headerImage = useResource(FileResource.detailShape(), {
    id: post.header_image,
  });

  const thumbnail =
    headerImage &&
    headerImage.data.thumbnails.find(
      (thumb) => thumb.width === 300 && thumb.url.includes('crop')
    );

  return (
    <IonCard className="post-card">
      {thumbnail && (
        <img
          src={thumbnail.url}
          alt={`thumbnail for post titled ${post.title}`}
        />
      )}
      <IonCardContent>{post.title}</IonCardContent>
    </IonCard>
  );
};

export default PostCard;

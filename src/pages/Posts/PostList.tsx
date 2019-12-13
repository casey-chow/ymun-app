import {
  IonCard,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import React from 'react';
import Interweave from 'interweave';
import PostResource from '../../resources/post';

interface PostListProps {
  readonly post: PostResource;
}

const PostList: React.FC<PostListProps> = ({ post }) => {
  const createPreviewText: Function = (body: string) => {
    const regex = RegExp('^(.*?)[.?!]', 'u');
    const previewText: string[] = body.split(regex);

    if (previewText === null) {
      return '';
    } else {
      return previewText.slice(1, 2).toString();
    }
  };

  return (
    // In order for redirect to properly work, you have to create an entirely new
    // directory in order to render a route correctly, for PostDetail/index.tsx for example
    <IonCard routerLink={`/posts/${post.id}`}>
      <IonCardHeader>
        <IonCardTitle>{post.title}</IonCardTitle>
        <IonCardSubtitle>
          {post.author} {post.created_on}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent id="content">
        <Interweave content={createPreviewText(post.body)} />
      </IonCardContent>
    </IonCard>
  );
};
export default PostList;

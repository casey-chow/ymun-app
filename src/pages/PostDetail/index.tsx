import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import PostDetailInner from './PostDetailInner';

import './postDetail.css';

type PostDetailProps = RouteComponentProps<{
  id: string;
}>;

const PostDetail: React.FC<PostDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Press" />}>
          <PostDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default PostDetail;

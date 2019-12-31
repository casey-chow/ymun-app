import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import './postList.css';
import PostListInner from './PostListInner';

const PostList: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Posts" />}>
          <PostListInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default PostList;

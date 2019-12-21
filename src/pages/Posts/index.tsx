import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import PostsInner from './PostsInner';

const Posts: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Posts" />}>
          <PostsInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Posts;

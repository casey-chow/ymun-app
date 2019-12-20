import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import PostsInner from './PostsInner';

const Posts: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback title="Posts" />}>
          <PostsInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Posts;

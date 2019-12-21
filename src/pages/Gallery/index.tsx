import React, { Suspense } from 'react';
import { IonPage } from '@ionic/react';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import GalleryInner from './GalleryInner';

const Gallery: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback title="Gallery" />}>
          <GalleryInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Gallery;

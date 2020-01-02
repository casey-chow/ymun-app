import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import GalleryDetailInner from './GalleryDetailInner';

import './galleryDetail.css';

type GalleryDetailProps = RouteComponentProps<{
  id: string;
}>;

const GalleryDetail: React.FC<GalleryDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense
          fallback={<SuspenseFallback title="Gallery" collapse={false} />}
        >
          <GalleryDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default GalleryDetail;

import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import ResourcePageDetailInner from './ResourcePageDetailInner';

import './resourcePageDetail.css';

type ResourcePageDetailProps = RouteComponentProps<{
  id: string;
}>;

const ResourcePageDetail: React.FC<ResourcePageDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback />}>
          <ResourcePageDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default ResourcePageDetail;

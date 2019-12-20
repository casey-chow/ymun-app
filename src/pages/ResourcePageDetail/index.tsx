import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import ResourcePageDetailInner from './ResourcePageDetailInner';

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
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <ResourcePageDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default ResourcePageDetail;

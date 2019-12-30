import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import ResourceCategoryDetailInner from './ResourceCategoryDetailInner';

import './resourceCategoryDetail.css';

type ResourceCategoryDetailProps = RouteComponentProps<{
  id: string;
}>;

const ResourceCategoryDetail: React.FC<ResourceCategoryDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback />}>
          <ResourceCategoryDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default ResourceCategoryDetail;

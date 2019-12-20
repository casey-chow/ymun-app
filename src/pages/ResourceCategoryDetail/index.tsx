import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import ResourceCategoryDetailInner from './ResourceCategoryDetailInner';

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
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <ResourceCategoryDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default ResourceCategoryDetail;

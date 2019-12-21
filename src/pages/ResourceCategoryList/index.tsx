import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import ResourceCategoryListInner from './ResourceCategoryListInner';
import './resources.css';

const ResourceCategoryList: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Resources" />}>
          <ResourceCategoryListInner></ResourceCategoryListInner>
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};
export default ResourceCategoryList;

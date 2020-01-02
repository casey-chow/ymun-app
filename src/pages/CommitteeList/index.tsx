import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import CommitteeListInner from './CommitteeListInner';

const CommitteeList: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Committees" />}>
          <CommitteeListInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default CommitteeList;

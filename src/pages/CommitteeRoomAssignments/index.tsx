import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import CommitteeRAInner from './CommitteeRAInner';

const CommitteeRoomAssignments: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Schedule" />}>
          <CommitteeRAInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default CommitteeRoomAssignments;

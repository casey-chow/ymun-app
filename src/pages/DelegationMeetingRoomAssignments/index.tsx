import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import DelegationMeetingRAInner from './DelegationMeetingRAInner';

const DelegationMeetingRoomAssignments: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Schedule" />}>
          <DelegationMeetingRAInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default DelegationMeetingRoomAssignments;

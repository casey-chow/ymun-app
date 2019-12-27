import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import CountryCaucusRAInner from './CountryCaucusRAInner';

const CountryCaucusRoomAssignments: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Country Caucus" />}>
          <CountryCaucusRAInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default CountryCaucusRoomAssignments;

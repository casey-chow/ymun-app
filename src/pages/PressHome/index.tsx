import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import './press.css';
import PressHomeInner from './PressHomeInner';

const Press: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense fallback={<SuspenseFallback title="Press" />}>
          <PressHomeInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Press;

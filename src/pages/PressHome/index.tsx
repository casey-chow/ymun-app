import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import './press.css';
import PressHomeInner from './PressHomeInner';

const Press: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback title="Press" />}>
          <PressHomeInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Press;

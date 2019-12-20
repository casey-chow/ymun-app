import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import HomeInner from './HomeInner';

const Home: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback />}>
          <HomeInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default Home;

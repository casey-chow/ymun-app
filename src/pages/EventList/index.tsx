import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { NetworkErrorBoundary } from 'rest-hooks';
import SuspenseFallback from '../../components/SuspenseFallback';
import EventListInner from './EventListInner';

const EventList: React.FC = () => {
  return (
    <IonPage>
      <NetworkErrorBoundary>
        <Suspense fallback={<SuspenseFallback title="Schedule" />}>
          <EventListInner />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default EventList;

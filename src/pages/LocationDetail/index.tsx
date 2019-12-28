import { IonPage } from '@ionic/react';
import React, { Suspense } from 'react';
import { RouteComponentProps } from 'react-router';
import { NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from '../../components/NetworkErrorFallback';
import SuspenseFallback from '../../components/SuspenseFallback';
import LocationDetailInner from './LocationDetailInner';

type LocationDetailProps = RouteComponentProps<{
  id: string;
}>;

const LocationDetail: React.FC<LocationDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  return (
    <IonPage>
      <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
        <Suspense
          fallback={<SuspenseFallback title="Location" collapse={false} />}
        >
          <LocationDetailInner id={id} />
        </Suspense>
      </NetworkErrorBoundary>
    </IonPage>
  );
};

export default LocationDetail;

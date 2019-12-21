import {
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { NetworkError } from 'rest-hooks';
import UDHR from './UDHR';

export interface NetworkErrorFallbackProps {
  error: NetworkError;
  title?: string;
}

const NetworkErrorFallback: React.FC<NetworkErrorFallbackProps> = ({
  error,
  title = 'Network Error',
}) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <h2>Delegate, you are out of order.</h2>
            <p>
              It happens to the best of us, and sometimes the Wi-Fi at
              conference isn't great. Unfortunately, we weren't able to retrieve
              the information you wanted. We encountered error {error.status},{' '}
              {error.response && error.response.statusText}.
            </p>
            <p>
              That said, we don't want to leave you empty-handed. So here's the
              full text of the Universal Declaration of Human Rights.
            </p>
            <UDHR />
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default NetworkErrorFallback;

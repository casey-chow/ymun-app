import {
  IonContent,
  IonHeader,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

export interface SuspenseFallbackProps {
  title?: string;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ title = '' }) => {
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100% - 51px)',
          }}
        >
          <IonSpinner />
        </div>
      </IonContent>
    </>
  );
};

export default SuspenseFallback;

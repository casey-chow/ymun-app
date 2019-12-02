import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
  IonText,
} from '@ionic/react';
import React from 'react';

import Locations from './Locations';
import Maps from './Maps';

const Rooms: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Room Assignments</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>Maps</IonText>
        <Maps />
        <IonText>Locations</IonText>
        <Locations />
      </IonContent>
    </IonPage>
  );
};

export default Rooms;

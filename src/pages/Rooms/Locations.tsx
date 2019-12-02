import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

export const Locations: React.FC = () => (
  <IonList>
    <IonItem>
      <IonLabel>Country Caucus</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Committee Sessions</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Delegation Meetings</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Free-Time Activities</IonLabel>
    </IonItem>
  </IonList>
);

export default Locations;

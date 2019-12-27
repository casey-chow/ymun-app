import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import LocationCard from './LocationCard';

const RoomAssignments: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Getting Around</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Getting Around</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LocationCard title="Hershey Lodge Map" />
        <LocationCard title="Committee Room Assignments" />
        <LocationCard
          title="Country Caucus Room Assignments"
          href="/rooms/country-caucus"
        />
        <LocationCard
          title="Delegation Meeting Room Assignments"
          href="/rooms/delegation-meetings"
        />
      </IonContent>
    </IonPage>
  );
};

export default RoomAssignments;

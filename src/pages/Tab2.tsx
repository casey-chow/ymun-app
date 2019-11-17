import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab Two</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem routerLink="/tab2/details">
          <IonLabel>
            <h2>Go to detail</h2>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);
export default Tab2;

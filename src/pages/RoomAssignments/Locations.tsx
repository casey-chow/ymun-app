import React from 'react';
import {
  IonList,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';

const styles = {
  card: {
    width: '100%',
    textAlign: 'left',
  },
};

const Locations: React.FC = () => {
  const items = [
    'Hershey Lodge Map',
    'Delegation Meeting Rooms',
    'Committee Rooms',
    'Country Caucus Rooms',
  ];

  return (
    <IonList lines="none">
      {items.map((item, i) => {
        return (
          <IonItem key={i + 1}>
            <IonCard style={styles.card} href={`/rooms/${i + 1}`}>
              <IonCardContent>
                <IonCardTitle>{item}</IonCardTitle>
              </IonCardContent>
            </IonCard>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default Locations;

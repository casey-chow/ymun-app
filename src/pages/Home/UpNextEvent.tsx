import React from 'react';
import { IonCard, IonCardContent, isPlatform } from '@ionic/react';

const styles = {
  iOSCard: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    right: '32px',
  },
  androidCard: {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
    right: '25px',
  },
};

const UpNextEvent: React.FC = () => {
  // TODO: get calendar event from our backend.

  return (
    <IonCard
      key={'upNextEvent'}
      color="primary"
      style={isPlatform('ios') ? styles.iOSCard : styles.androidCard}
    >
      <IonCardContent>The Dance</IonCardContent>
    </IonCard>
  );
};

export default UpNextEvent;

import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

const UpNextEvent: React.FC = () => {
  // TODO: get calendar event from our backend.

  return (
    <IonCard
      key={'upNextEvent'}
      color="primary"
      style={{
        display: 'inline-block',
        width: '40vw',
        textAlign: 'center',
      }}
    >
      <IonCardContent>The Dance</IonCardContent>
    </IonCard>
  );
};

export default UpNextEvent;

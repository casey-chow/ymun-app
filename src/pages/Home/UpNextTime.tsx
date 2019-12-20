import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

const UpNextTime: React.FC = () => {
  // TODO: get calendar time from our backend.

  return (
    <IonCard
      key={'upNextTime'}
      color="warning"
      style={{
        width: '30vw',
        textAlign: 'center',
      }}
    >
      <IonCardContent>9:00 PM</IonCardContent>
    </IonCard>
  );
};

export default UpNextTime;

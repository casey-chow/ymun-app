import { IonSpinner } from '@ionic/react';
import React, { FC } from 'react';

const Loading: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <IonSpinner />
    </div>
  );
};
export default Loading;

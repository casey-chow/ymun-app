import { IonButton } from '@ionic/react';
import React, { ComponentPropsWithRef } from 'react';

const FollowThroughButton: React.FC<ComponentPropsWithRef<
  typeof IonButton
>> = ({ children, ...rest }) => {
  return (
    <IonButton
      className="section-follow-through"
      color="light"
      fill="solid"
      size="small"
      {...rest}
    >
      {children}
    </IonButton>
  );
};

export default FollowThroughButton;

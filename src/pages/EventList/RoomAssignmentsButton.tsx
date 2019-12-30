import React from 'react';
import { IonButton } from '@ionic/react';

export interface RoomAssignmentsButtonProps {
  kind?: string;
}

const RoomAssignmentsButton: React.FC<RoomAssignmentsButtonProps> = ({
  kind,
}) => {
  switch (kind) {
    case 'delegation-meetings':
      return (
        <IonButton
          routerLink="/rooms/delegation-meetings"
          size="small"
          fill="outline"
        >
          Find Your Room
        </IonButton>
      );
    case 'country-caucus':
      return (
        <IonButton
          routerLink="/rooms/country-caucus"
          size="small"
          fill="outline"
        >
          Find Your Room
        </IonButton>
      );
    case 'committees':
      return (
        <IonButton routerLink="/rooms/committees" size="small" fill="outline">
          Find Your Room
        </IonButton>
      );
    default:
      return null;
  }
};

export default RoomAssignmentsButton;

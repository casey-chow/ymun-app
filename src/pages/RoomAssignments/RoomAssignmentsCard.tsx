import { IonCard, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';

export interface RoomAssignmentsCardProps {
  href?: string;
  thumbnailUrl?: string;
  title: string;
}

const centerElementsVertically = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const RoomAssignmentsCard: React.FC<RoomAssignmentsCardProps> = ({
  href,
  thumbnailUrl,
  title,
}) => {
  return (
    <IonCard routerLink={href} className="room-assignments-card">
      <IonGrid>
        <IonRow>
          <IonCol size="3" style={centerElementsVertically}>
            {thumbnailUrl && <IonImg src={thumbnailUrl} />}
          </IonCol>
          <IonCol style={centerElementsVertically}>
            <h4>{title}</h4>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default RoomAssignmentsCard;

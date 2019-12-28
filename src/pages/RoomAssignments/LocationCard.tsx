import React from 'react';
import { IonGrid, IonRow, IonCol, IonImg, IonCard } from '@ionic/react';

export interface LocationCardProps {
  thumbnailUrl?: string;
  title: string;
  href?: string;
}

const centerElementsVertically = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const LocationCard: React.FC<LocationCardProps> = ({
  thumbnailUrl,
  title,
  href,
}) => {
  return (
    <IonCard routerLink={href}>
      <IonGrid>
        <IonRow>
          <IonCol size="3" style={centerElementsVertically}>
            <IonImg
              src="/assets/map.png"
              alt={`Thumbnail of Map for ${title}`}
            />
          </IonCol>
          <IonCol style={centerElementsVertically}>
            <h4 style={{ color: 'black', margin: '0' }}>{title}</h4>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default LocationCard;

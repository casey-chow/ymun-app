import { IonCard, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import FileResource from '../../resources/file';
import MapResource from '../../resources/map';

export interface MapCardProps {
  readonly map: MapResource;
}

const centerElementsVertically = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

// TODO: Refactor to unify with LocationCard.
const MapCard: React.FC<MapCardProps> = ({ map }) => {
  const attachment = useCache(FileResource.detailShape(), {
    id: map.attachment,
  });

  const thumbnail =
    attachment &&
    attachment.data.thumbnails.find((thumb) => thumb.width === 300);

  return (
    <IonCard routerLink={`/maps/${map.id}`}>
      <IonGrid>
        <IonRow>
          <IonCol size="3" style={centerElementsVertically}>
            {thumbnail && <IonImg src={thumbnail.url} />}
          </IonCol>
          <IonCol style={centerElementsVertically}>
            <h4 style={{ color: 'black', margin: '0' }}>{map.name}</h4>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default MapCard;

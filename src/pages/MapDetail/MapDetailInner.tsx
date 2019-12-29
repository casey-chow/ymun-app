import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import PinchToZoom from 'react-pinch-and-zoom';
import { useResource } from 'rest-hooks';
import MapResource from '../../resources/map';
import FileResource from '../../resources/file';

interface MapDetailInnerProps {
  id: string;
}

const MapDetailInner: React.FC<MapDetailInnerProps> = ({ id }) => {
  const map = useResource(MapResource.detailShape(), { id });
  const attachment = useResource(FileResource.detailShape(), {
    id: map.attachment,
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/rooms" />
          </IonButtons>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="map-detail" scrollY={false}>
        <PinchToZoom
          debug={false}
          className=""
          minZoomScale={1}
          maxZoomScale={4}
          boundSize={{
            width: 100,
            height: 100,
          }}
          contentSize={{
            width: 100,
            height: 100,
          }}
        >
          <img
            src={attachment && attachment.data.url}
            alt={`map of ${map.name}`}
          />
        </PinchToZoom>
      </IonContent>
    </>
  );
};
export default MapDetailInner;

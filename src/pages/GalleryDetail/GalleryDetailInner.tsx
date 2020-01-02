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
import FileResource from '../../resources/file';
import GalleryPhotosResource from '../../resources/galleryPhoto';

interface GalleryDetailInnerProps {
  id: string;
}

const GalleryDetailInner: React.FC<GalleryDetailInnerProps> = ({ id }) => {
  const photo = useResource(GalleryPhotosResource.detailShape(), { id });
  const file = useResource(FileResource.detailShape(), {
    id: photo.photo,
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/press/gallery/" />
          </IonButtons>
          <IonTitle>Photo</IonTitle>
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
          <img src={file && file.data.url} alt={file.description} />
        </PinchToZoom>
      </IonContent>
    </>
  );
};
export default GalleryDetailInner;

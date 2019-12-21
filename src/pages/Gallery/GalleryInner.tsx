import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonImg,
} from '@ionic/react';
import { useResource } from 'rest-hooks';
import GalleryResource from '../../resources/gallery';

const GalleryInner: React.FC = () => {
  const gallery = useResource(GalleryResource.listShape(), {});

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {gallery.map((pic) => {
              return (
                <IonCol key={pic.pk()}>
                  <IonImg
                    key={pic.pk()}
                    src={pic.photo.data.url}
                    style={{
                      objectFit: 'cover',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      height: '5em',
                      width: '5em',
                    }}
                  />
                </IonCol>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default GalleryInner;

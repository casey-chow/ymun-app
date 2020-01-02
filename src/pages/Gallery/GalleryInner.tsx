import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonGrid,
  IonButtons,
  IonBackButton,
} from '@ionic/react';
import _ from 'lodash';
import { useResource, useRetrieve } from 'rest-hooks';
import GalleryPhotosResource from '../../resources/galleryPhoto';
import FileResource from '../../resources/file';
import GalleryItem from './GalleryItem';

const GalleryInner: React.FC = () => {
  const galleryPhotos = useResource(GalleryPhotosResource.listShape(), {});

  useRetrieve(FileResource.listShape(), {
    'filter[id][in]': galleryPhotos
      .map((x) => x.photo)
      .filter((x) => !_.isNull(x))
      .join(','),
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts" />
          </IonButtons>
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
            {galleryPhotos.map((pic) => {
              return (
                <IonCol key={pic.id} size="4" class="pic-column">
                  <GalleryItem photo={pic} />
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

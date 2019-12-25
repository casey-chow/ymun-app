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
import _ from 'lodash';
import { useResource } from 'rest-hooks';
import GalleryPhotosResource from '../../resources/galleryPhoto';
import FileResource from '../../resources/file';

const GalleryInner: React.FC = () => {
  const galleryPhotos = useResource(GalleryPhotosResource.listShape(), {});

  const files = useResource(FileResource.listShape(), {
    'filter[id][in]': galleryPhotos
      .map((x) => x.photo)
      .filter((x) => !_.isNull(x))
      .join(','),
  });
  const fileById = _.keyBy(files, 'id');

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
            {galleryPhotos.map((pic) => {
              const file = pic.id && fileById[pic.id];
              if (!file) return null;

              return (
                <IonCol key={pic.id}>
                  <IonImg
                    key={pic.pk()}
                    src={file.data.url}
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

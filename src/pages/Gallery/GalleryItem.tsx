import React from 'react';
import { IonImg, IonRouterLink } from '@ionic/react';
import { useCache } from 'rest-hooks';
import GalleryPhotosResource from '../../resources/galleryPhoto';
import FileResource from '../../resources/file';

interface GalleryItemProps {
  photo: GalleryPhotosResource;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ photo }) => {
  const file = useCache(FileResource.detailShape(), { id: photo.photo });

  const thumbnail =
    file && file.data.thumbnails.find((thumb) => thumb.width === 300);
  return (
    <div>
      <IonRouterLink href={`/press/gallery/${photo.id}`}>
        {thumbnail && <IonImg src={thumbnail.url} />}
      </IonRouterLink>
    </div>
  );
};
export default GalleryItem;

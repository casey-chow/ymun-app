import { IonCard, IonCardHeader, IonImg } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import FileResource from '../../resources/file';
import ResourceCategoryResource from '../../resources/resourceCategory';

interface ResourceCategoryTileProps {
  category: ResourceCategoryResource;
}

const ResourceCategoryTile: React.FC<ResourceCategoryTileProps> = ({
  category,
}) => {
  const icon = useCache(FileResource.detailShape(), { id: category.icon });

  return (
    <IonCard href={`/resources/${category.id}`}>
      {/* div is necessary to prevent rendering error with react + web components */}
      <div>{icon && <IonImg src={icon.data.url} />}</div>
      <IonCardHeader>{category.name}</IonCardHeader>
    </IonCard>
  );
};
export default ResourceCategoryTile;

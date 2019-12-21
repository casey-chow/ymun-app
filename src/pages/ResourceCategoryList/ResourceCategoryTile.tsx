import { IonCard, IonCardHeader, IonImg } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import { Plugins } from '@capacitor/core';
import FileResource from '../../resources/file';
import ResourceCategoryResource from '../../resources/resourceCategory';

const { Browser } = Plugins;

interface ResourceCategoryTileProps {
  category: ResourceCategoryResource;
}

const ResourceCategoryTile: React.FC<ResourceCategoryTileProps> = ({
  category,
}) => {
  const icon = useCache(FileResource.detailShape(), { id: category.icon });

  if (category.clickthrough_url) {
    const url = category.clickthrough_url;
    return (
      <IonCard onClick={() => Browser.open({ url })} button class="expand">
        {/* div is necessary to prevent rendering error with react + web components */}
        <div>{icon && <IonImg src={icon.data.url} />}</div>
        <IonCardHeader>{category.name}</IonCardHeader>
      </IonCard>
    );
  }

  return (
    <IonCard routerLink={`/resources/${category.id}`} button class="expand">
      {/* div is necessary to prevent rendering error with react + web components */}
      <div>{icon && <IonImg src={icon.data.url} />}</div>
      <IonCardHeader>{category.name}</IonCardHeader>
    </IonCard>
  );
};
export default ResourceCategoryTile;

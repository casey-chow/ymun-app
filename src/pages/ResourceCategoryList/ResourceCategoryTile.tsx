import { Plugins } from '@capacitor/core';
import { IonCard } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
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
      <div>
        <IonCard
          onClick={() => Browser.open({ url })}
          button
          class="expand resource-category-tile"
        >
          {/* div is necessary to prevent rendering error with react + web components */}
          <div>{icon && <img src={icon.data.url} alt={category.name} />}</div>
        </IonCard>
        <h2 className="tile-title">{category.name}</h2>
      </div>
    );
  }

  return (
    <div>
      <IonCard
        routerLink={`/resources/${category.id}`}
        button
        class="expand resource-category-tile"
      >
        {/* div is necessary to prevent rendering error with react + web components */}
        <div>{icon && <img src={icon.data.url} alt={category.name} />}</div>
      </IonCard>
      <h2 className="tile-title">{category.name}</h2>
    </div>
  );
};
export default ResourceCategoryTile;

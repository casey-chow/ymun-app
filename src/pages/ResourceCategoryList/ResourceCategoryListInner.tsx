import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import FileResource from '../../resources/file';
import ResourceCategoryResource from '../../resources/resourceCategory';
import ResourceCategoryTile from './ResourceCategoryTile';

const ResourceCategoryListInner: React.FC = () => {
  const resourceCategories = useResource(
    ResourceCategoryResource.listShape(),
    {}
  );

  // pre-cache icons
  useRetrieve(FileResource.listShape(), {
    'filter[id][in]': resourceCategories.map((cat) => cat.icon).join(','),
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resources</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {resourceCategories.map((category) => (
              <IonCol key={category.id} size="6" class="resource-column">
                <ResourceCategoryTile category={category} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default ResourceCategoryListInner;

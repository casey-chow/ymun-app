import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import FileResource from '../../resources/file';
import ResourceCategoryResource from '../../resources/resourceCategory';
import ResourceCategoryTile from './ResourceCategoryTile';

const ResourceCategoryList: React.FC = () => {
  const resourceCategories = useResource(
    ResourceCategoryResource.listShape(),
    {}
  );

  // pre-cache icons
  useRetrieve(FileResource.listShape(), {
    'filter[id][in]': resourceCategories.map((cat) => cat.icon).join(','),
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            {resourceCategories.map((category) => (
              <IonCol key={category.id} size="6">
                <ResourceCategoryTile category={category} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default ResourceCategoryList;
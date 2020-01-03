import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar,
  IonCard,
  IonImg,
  isPlatform,
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
      <IonContent className="resource-category-list">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Resources</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="background-inner">
          <IonGrid className="category-grid">
            <IonRow style={{ marginBottom: '3rem' }}>
              {resourceCategories.length > 0 && (
                <IonCol size="6" class="resource-column">
                  <IonCard
                    routerLink="/committees"
                    button
                    class={
                      isPlatform('android')
                        ? 'resource-category-tile expand'
                        : 'resource-category-tile'
                    }
                  >
                    {/* div is necessary to prevent rendering error with react + web components */}
                    <div>
                      <IonImg src="/assets/committees.jpg" />
                    </div>
                  </IonCard>
                  <h2 className="tile-title">Committees</h2>
                </IonCol>
              )}

              {resourceCategories.map((category) => (
                <IonCol key={category.id} size="6" class="resource-column">
                  <ResourceCategoryTile category={category} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </>
  );
};

export default ResourceCategoryListInner;

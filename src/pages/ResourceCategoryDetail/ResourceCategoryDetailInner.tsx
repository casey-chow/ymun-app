import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React from 'react';
import { useResource } from 'rest-hooks';
import ResourceCategoryResource from '../../resources/resourceCategory';
import ResourcePageResource from '../../resources/resourcePage';

interface ResourceCategoryDetailInnerProps {
  id: string;
}

const ResourceCategoryDetailInner: React.FC<ResourceCategoryDetailInnerProps> = ({
  id,
}) => {
  const [category, pages] = useResource(
    [ResourceCategoryResource.detailShape(), { id }],
    [ResourcePageResource.listShape(), { 'filter[category][=]': id }]
  );

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/resources" text="Resources" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>{category.name}</h1>
              <Interweave content={category.description}></Interweave>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonList>
          <IonItemDivider>
            <IonLabel>Pages</IonLabel>
          </IonItemDivider>
          {pages.map((page) => (
            <IonItem
              key={page.id}
              lines="full"
              routerLink={`/pages/${page.id}`}
            >
              <IonLabel>{page.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default ResourceCategoryDetailInner;

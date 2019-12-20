import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
} from '@ionic/react';
import Interweave from 'interweave';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useResource } from 'rest-hooks';
import ResourceCategoryResource from '../../resources/resourceCategory';
import ResourcePageResource from '../../resources/resourcePage';

type ResourceCategoryDetailProps = RouteComponentProps<{
  id: string;
}>;

const ResourceCategoryDetail: React.FC<ResourceCategoryDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  const [category, pages] = useResource(
    [ResourceCategoryResource.detailShape(), { id }],
    [ResourcePageResource.listShape(), { 'filter[category][=]': id }]
  );

  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/resources" text="Resources" />
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonTitle size="large">{category.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
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
              routerLink={`/resources/${id}/pages/${page.id}`}
            >
              <IonLabel>{page.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ResourceCategoryDetail;

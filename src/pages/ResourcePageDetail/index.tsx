import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useResource } from 'rest-hooks';
import ResourcePageResource from '../../resources/resourcePage';
import PageSection from './PageSection';

type ResourcePageDetailProps = RouteComponentProps<{
  categoryId: string;
  pageId: string;
}>;

const ResourcePageDetail: React.FC<ResourcePageDetailProps> = ({
  match: {
    params: { categoryId, pageId },
  },
}) => {
  const page = useResource(ResourcePageResource.detailShape(), {
    id: pageId,
  });

  const [expandedKey, setExpandedKey] = useState<string | undefined>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/resources/${categoryId}`} />
          </IonButtons>
          <IonTitle>{page.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Interweave content={page.body}></Interweave>
            </IonCol>
          </IonRow>

          <IonList>
            <IonItemDivider>
              <IonLabel>Sections</IonLabel>
            </IonItemDivider>

            {(page.sections || []).map((section) => (
              <PageSection
                key={section.title}
                section={section}
                expanded={expandedKey === section.title}
                onClick={(expanded) => {
                  // toggle expanded state
                  if (expanded) {
                    setExpandedKey(undefined);
                  } else {
                    setExpandedKey(section.title);
                  }
                }}
              />
            ))}
          </IonList>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ResourcePageDetail;

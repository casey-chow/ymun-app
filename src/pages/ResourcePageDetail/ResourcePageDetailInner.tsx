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
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React, { useState } from 'react';
import { useResource } from 'rest-hooks';
import ResourcePageResource from '../../resources/resourcePage';
import PageSection from './PageSection';

interface ResourcePageDetailInnerProps {
  id: string;
}

const ResourcePageDetailInner: React.FC<ResourcePageDetailInnerProps> = ({
  id,
}) => {
  const page = useResource(ResourcePageResource.detailShape(), { id });

  const [expandedKey, setExpandedKey] = useState<string | undefined>();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/resources/${page.category}`} />
          </IonButtons>
          <IonTitle>{page.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{page.title}</IonTitle>
          </IonToolbar>
        </IonHeader>

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
    </>
  );
};

export default ResourcePageDetailInner;

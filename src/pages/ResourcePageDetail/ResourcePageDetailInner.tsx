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
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React, { useState } from 'react';
import { useResource } from 'rest-hooks';
import ResourceCategoryResource from '../../resources/resourceCategory';
import ResourcePageResource from '../../resources/resourcePage';
import PageSection from './PageSection';

interface ResourcePageDetailInnerProps {
  id: string;
}

const ResourcePageDetailInner: React.FC<ResourcePageDetailInnerProps> = ({
  id,
}) => {
  const page = useResource(ResourcePageResource.detailShape(), { id });
  const category = useResource(ResourceCategoryResource.detailShape(), {
    id: page.category,
  });

  const [expandedKey, setExpandedKey] = useState<string | undefined>();

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              defaultHref={`/resources/${page.category}`}
              text={category.name}
            />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>{page.title}</h1>
              <Interweave content={page.body}></Interweave>
            </IonCol>
          </IonRow>

          {page.sections && page.sections.length > 0 && (
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
          )}
        </IonGrid>
      </IonContent>
    </>
  );
};

export default ResourcePageDetailInner;

import { Plugins } from '@capacitor/core';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonToolbar,
} from '@ionic/react';
import Interweave from 'interweave';
import React from 'react';
import { useResource } from 'rest-hooks';
import CommitteeResource from '../../resources/committee';
import LocationResource from '../../resources/location';

const { Browser } = Plugins;

interface CommitteeDetailInnerProps {
  id: string;
}

const CommitteeDetailInner: React.FC<CommitteeDetailInnerProps> = ({ id }) => {
  const committee = useResource(CommitteeResource.detailShape(), { id });
  const location = useResource(LocationResource.detailShape(), {
    id: committee.location,
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/committees" text="Committees" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="resource-page-detail">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 className="title">{committee.name}</h1>
              <p>
                <strong>Location:</strong> {location.name}{' '}
              </p>
              <p>
                <strong>Officer(s):</strong> {committee.officers}
              </p>
              <p>
                <strong>Advisor(s):</strong> {committee.staffers}
              </p>
              <Interweave content={committee.misc}></Interweave>
              <p />
              {committee.topic_description_url && (
                <IonButton
                  onClick={() =>
                    committee.topic_description_url &&
                    Browser.open({ url: committee.topic_description_url })
                  }
                  fill="outline"
                  expand="block"
                >
                  View Topic Descriptions
                </IonButton>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default CommitteeDetailInner;

import { IonItem, IonLabel, IonNote } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import CommitteeResource from '../../resources/committee';
import LocationResource from '../../resources/location';

export interface CommitteeItemProps {
  committee: CommitteeResource;
}

const CommitteeItem: React.FC<CommitteeItemProps> = ({ committee }) => {
  const location = useCache(LocationResource.detailShape(), {
    id: committee.location,
  });

  return (
    <IonItem>
      <IonLabel class="ion-text-wrap">{committee.name}</IonLabel>
      <IonNote class="ion-text-wrap">
        <small>{location && location.name}</small>
      </IonNote>
    </IonItem>
  );
};

export default CommitteeItem;

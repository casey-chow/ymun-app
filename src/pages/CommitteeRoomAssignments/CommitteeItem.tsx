import { IonItem, IonLabel, IonNote, isPlatform } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import CommitteeResource from '../../resources/committee';
import LocationResource from '../../resources/location';

export interface CommitteeItemProps {
  committee: CommitteeResource;
}

const styles = {
  mdNote: {
    padding: '2em',
  },
};

const CommitteeItem: React.FC<CommitteeItemProps> = ({ committee }) => {
  const location = useCache(LocationResource.detailShape(), {
    id: committee.location,
  });

  return (
    // <IonItem routerLink={`/locations/${committee.location}`}>
    <IonItem>
      <IonLabel class="ion-text-wrap">{committee.name}</IonLabel>
      <IonNote
        class="ion-text-wrap"
        style={isPlatform('android') ? styles.mdNote : {}}
      >
        {location && location.name}
      </IonNote>
    </IonItem>
  );
};

export default CommitteeItem;

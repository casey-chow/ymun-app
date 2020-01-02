import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import CommitteeResource from '../../resources/committee';

export interface CommitteeItemProps {
  committee: CommitteeResource;
}

const CommitteeItem: React.FC<CommitteeItemProps> = ({ committee }) => {
  return (
    <IonItem routerLink={`/committees/${committee.id}`}>
      <IonLabel class="ion-text-wrap">{committee.name}</IonLabel>
    </IonItem>
  );
};

export default CommitteeItem;

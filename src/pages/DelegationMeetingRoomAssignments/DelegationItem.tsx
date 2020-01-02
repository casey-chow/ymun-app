import { IonItem, IonLabel, IonNote, isPlatform } from '@ionic/react';
import React from 'react';
import { useCache } from 'rest-hooks';
import DelegationResource from '../../resources/delegation';
import LocationResource from '../../resources/location';

export interface DelegationItemProps {
  delegation: DelegationResource;
}

const styles = {
  mdNote: {
    padding: '2em',
  },
};

const DelegationItem: React.FC<DelegationItemProps> = ({ delegation }) => {
  const location = useCache(LocationResource.detailShape(), {
    id: delegation.meeting_location,
  });

  const isNarrow = window.outerWidth < 350;

  return (
    // <IonItem routerLink={`/locations/${delegation.meeting_location}`}>
    <IonItem>
      <IonLabel class={isNarrow ? 'ion-text-wrap' : ''}>
        {delegation.name}
      </IonLabel>
      <IonNote
        class="ion-text-wrap"
        style={isPlatform('android') ? styles.mdNote : {}}
      >
        {isNarrow ? (
          <small>{location && location.name}</small>
        ) : (
          location && location.name
        )}
      </IonNote>
    </IonItem>
  );
};

export default DelegationItem;

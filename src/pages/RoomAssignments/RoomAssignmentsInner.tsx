import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import _ from 'lodash';
import React from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import FileResource from '../../resources/file';
import MapResource from '../../resources/map';
import LocationCard from './LocationCard';
import MapCard from './MapCard';

const RoomAssignmentsInner: React.FC = () => {
  const maps = useResource(MapResource.listShape(), {});
  useRetrieve(FileResource.listShape(), {
    'filter[id][in]': maps
      .map((m) => m.attachment)
      .filter((x) => !_.isNull(x))
      .join(','),
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Getting Around</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Getting Around</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Maps</h1>
        {maps.map((map) => (
          <MapCard key={map.id} map={map} />
        ))}
        <h1>Room Assignments</h1>
        <LocationCard title="Committees" href="/rooms/committees" />
        <LocationCard title="Country Caucus" href="/rooms/country-caucus" />
        <LocationCard
          title="Delegation Meetings"
          href="/rooms/delegation-meetings"
        />
      </IonContent>
    </>
  );
};

export default RoomAssignmentsInner;

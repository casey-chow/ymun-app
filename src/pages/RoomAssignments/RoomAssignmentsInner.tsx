import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import _ from 'lodash';
import React from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import SectionHeader from '../../components/SectionHeader';
import FileResource from '../../resources/file';
import MapResource from '../../resources/map';
import MapCard from './MapCard';
import RoomAssignmentsCard from './RoomAssignmentsCard';

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
      <IonContent className="room-assignments">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Getting Around</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SectionHeader color="primary">Maps</SectionHeader>
        {maps.map((map) => (
          <MapCard key={map.id} map={map} />
        ))}

        <SectionHeader color="primary">Room Assignments</SectionHeader>
        <RoomAssignmentsCard
          title="Committees"
          href="/rooms/committees"
          thumbnailUrl="/assets/map.png"
        />
        <RoomAssignmentsCard
          title="Country Caucus"
          href="/rooms/country-caucus"
          thumbnailUrl="/assets/map.png"
        />
        <RoomAssignmentsCard
          title="Delegation Meetings"
          href="/rooms/delegation-meetings"
          thumbnailUrl="/assets/map.png"
        />
      </IonContent>
    </>
  );
};

export default RoomAssignmentsInner;

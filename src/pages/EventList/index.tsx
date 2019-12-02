import {
  IonContent,
  IonHeader,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import dayjs from 'dayjs';
import { groupBy, sortBy } from 'lodash';
import React from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import EventResource from '../../resources/event';
import LocationResource from '../../resources/location';
import EventsListItem from './EventListItem';

const EventList: React.FC = () => {
  const events = useResource(EventResource.listShape(), {});
  useRetrieve(LocationResource.listShape(), {});

  // const evt1 = new EventResource();

  // Object.assign(evt1, {
  //   id: 1,
  //   status: 'published',
  //   title: 'Delegate Dance',
  //   description: "<p>Don't forget to bring your clothes!<br></p>",
  //   start_time: '2020-01-05 14:30:00',
  //   end_time: '2020-01-05 15:30:00',
  //   location: 1,
  // });

  // const evt2 = new EventResource();
  // Object.assign(evt2, {
  //   id: 2,
  //   status: 'published',
  //   title: 'Post Dance Postgame',
  //   description: '<p>Hehehehehhehe</p>',
  //   start_time: '2020-01-05 15:30:00',
  //   end_time: '2020-01-05 19:30:00',
  // });

  // const events = [evt2, evt1];

  const eventsByDay = groupBy(events, (event) =>
    dayjs(event.start_time).format('dddd, MMMM  D')
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {Object.entries(eventsByDay).map(([day, eventsForDay]) => {
            const eventsSorted = sortBy(eventsForDay, ['start_time']);

            return (
              <IonItemGroup key={day}>
                <IonItemDivider sticky>
                  <IonLabel>{day}</IonLabel>
                </IonItemDivider>
                {eventsSorted.map((event) => (
                  <EventsListItem key={event.id} event={event} />
                ))}
              </IonItemGroup>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EventList;

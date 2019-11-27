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
import { useResource } from 'rest-hooks';
import EventResource from '../../resources/event';
import EventsListItem from './EventListItem';

const EventList: React.FC = () => {
  const events = useResource(EventResource.listShape(), {
    fields: '*,location.*',
  });

  const eventsByDay = groupBy(events, (event) =>
    dayjs(event.start_time).format('dddd, MMMM  D')
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
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

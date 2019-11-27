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
import { groupBy } from 'lodash';
import React from 'react';
import { useResource } from 'rest-hooks';
import EventResource from '../../resources/event';
import EventDetail from './EventDetail';

const Events: React.FC = () => {
  const events = useResource(EventResource.listShape(), {});

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
            return (
              <IonItemGroup key={day}>
                <IonItemDivider sticky>
                  <IonLabel>{day}</IonLabel>
                </IonItemDivider>
                {eventsForDay.map((event) => (
                  <EventDetail key={event.id} event={event} />
                ))}
              </IonItemGroup>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Events;

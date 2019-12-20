import {
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import dayjs from 'dayjs';
import { groupBy, sortBy } from 'lodash';
import React, { useState } from 'react';
import { useResource, useRetrieve } from 'rest-hooks';
import EventResource from '../../resources/event';
import LocationResource from '../../resources/location';
import EventsListItem from './EventListItem';

const dateFormat = 'dddd, MMM D';

const EventList: React.FC = () => {
  const events = useResource(EventResource.listShape(), {});
  useRetrieve(LocationResource.listShape(), {});

  const eventsByDay = groupBy(events, (event) =>
    dayjs(event.start_time).format(dateFormat)
  );
  const allDays = Object.keys(eventsByDay);

  // get the current date, or the first day of the schedule if not available
  const initialDay = (() => {
    const currentDate = dayjs().format(dateFormat);
    if (allDays.includes(currentDate)) {
      return currentDate;
    } else {
      return allDays[0];
    }
  })();

  const [currentDay, setCurrentDay] = useState(initialDay);
  const eventsSorted = sortBy(eventsByDay[currentDay], ['start_time']);

  const [expandedKey, setExpandedKey] = useState<number | undefined>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonSelect
              value={currentDay}
              interface="popover"
              onIonChange={(change) => setCurrentDay(change.detail.value)}
            >
              {allDays.map((day) => (
                <IonSelectOption key={day}>{day}</IonSelectOption>
              ))}
            </IonSelect>
          </IonButtons>
          <IonTitle>Schedule</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Schedule</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList lines="full">
          {eventsSorted.map((event) => (
            <EventsListItem
              key={event.id}
              event={event}
              expanded={expandedKey === event.id}
              onClick={(expanded) => {
                // toggle expanded state
                if (expanded) {
                  setExpandedKey(undefined);
                } else {
                  setExpandedKey(event.id);
                }
              }}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EventList;

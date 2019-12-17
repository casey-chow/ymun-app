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

const dateFormat = 'dddd, MMMM D';

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

  // TODO: Set the initial day based on current day.
  const [currentDay, setCurrentDay] = useState(initialDay);
  const eventsSorted = sortBy(eventsByDay[currentDay], ['start_time']);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Schedule</IonTitle>
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
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          {eventsSorted.map((event) => (
            <EventsListItem key={event.id} event={event} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EventList;

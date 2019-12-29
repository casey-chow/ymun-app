import { IonCard, IonCol, IonGrid, IonRow } from '@ionic/react';
import dayjs from 'dayjs';
import React from 'react';
import { useResource } from 'rest-hooks';
import EventResource from '../../resources/event';

const requestTimeFormat = 'YYYY-MM-DD HH:mm:ss';
const displayTimeFormat = 'h:mm A';

const UpNext: React.FC = () => {
  const now = dayjs();
  const events = useResource(EventResource.listShape(), {
    'filter[start_time][gt]': now.format(requestTimeFormat),
    limit: 5,
  });

  // Get all events within 30 minutes of the first event.
  const eventsFiltered =
    events.length > 0
      ? events.filter(
          (event) =>
            dayjs(event.start_time).diff(events[0].start_time, 'minute') < 30
        )
      : events;

  return (
    <>
      {eventsFiltered.map((event) => (
        <IonCard color="light" key={event.id}>
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <strong>
                  {dayjs(event.start_time).format(displayTimeFormat)}
                </strong>
              </IonCol>
              <IonCol>{event.title}</IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      ))}
    </>
  );
};

export default UpNext;

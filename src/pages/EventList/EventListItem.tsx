import { IonItem, IonLabel } from '@ionic/react';
import dayjs from 'dayjs';
import * as React from 'react';
import EventResource from '../../resources/event';

interface EventDetailProps {
  readonly event: EventResource;
}

const timeFormat = 'h:mm A';

const EventsListItem: React.FC<EventDetailProps> = ({ event }) => {
  return (
    <IonItem routerLink={`/events/${event.id}`}>
      <div slot="start" style={{ padding: '0 0 4px' }} className="ion-text-end">
        <small>
          <strong>{dayjs(event.start_time).format(timeFormat)}</strong>
          <br />
          {dayjs(event.end_time).format(timeFormat)}
        </small>
      </div>

      <IonLabel>{event.title}</IonLabel>
    </IonItem>
  );
};

export default EventsListItem;

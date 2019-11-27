import { IonItem, IonLabel, IonText } from '@ionic/react';
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
      <div slot="start" className="ion-text-end">
        <IonLabel>
          <small>
            <strong>{dayjs(event.start_time).format(timeFormat)}</strong>
            <br />
            <IonText color="medium">
              {dayjs(event.end_time).format(timeFormat)}
            </IonText>
          </small>
        </IonLabel>
      </div>

      <IonLabel>
        {event.title}
        {event.location && (
          <>
            <br />
            <IonText color="medium">
              <small>{event.location.name}</small>
            </IonText>
          </>
        )}
      </IonLabel>
    </IonItem>
  );
};

export default EventsListItem;

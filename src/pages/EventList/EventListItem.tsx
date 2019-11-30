import { IonItem, IonLabel, IonText } from '@ionic/react';
import dayjs from 'dayjs';
import { isNil } from 'lodash';
import * as React from 'react';
import { useCache } from 'rest-hooks';
import EventResource from '../../resources/event';
import LocationResource from '../../resources/location';

interface EventDetailProps {
  readonly event: EventResource;
}

const timeFormat = 'h:mm A';

const EventsListItem: React.FC<EventDetailProps> = ({ event }) => {
  const location = useCache(
    LocationResource.detailShape(),
    isNil(event.location) ? null : { id: event.location }
  );

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
        {location && (
          <>
            <br />
            <IonText color="medium">
              <small>{location.name}</small>
            </IonText>
          </>
        )}
      </IonLabel>
    </IonItem>
  );
};

export default EventsListItem;

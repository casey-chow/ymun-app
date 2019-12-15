import { IonIcon, IonItem, IonLabel, IonText } from '@ionic/react';
import dayjs from 'dayjs';
import { arrowDropleft, arrowDropdown } from 'ionicons/icons';
import { isNil } from 'lodash';
import React, { useCallback } from 'react';
import { useCache } from 'rest-hooks';
import EventResource from '../../resources/event';
import LocationResource from '../../resources/location';

interface EventDetailProps {
  readonly event: EventResource;
  readonly expanded: boolean;
  readonly onClick: (expanded: boolean) => void;
}

const timeFormat = 'h:mm A';

const EventsListItem: React.FC<EventDetailProps> = ({
  event,
  expanded,
  onClick,
}) => {
  const location = useCache(
    LocationResource.detailShape(),
    isNil(event.location) ? null : { id: event.location }
  );

  const memoizedOnClick = useCallback(() => {
    onClick(expanded);
  }, [expanded, onClick]);

  return (
    <IonItem
      style={{
        cursor: 'pointer',
      }}
      onClick={memoizedOnClick}
      className="ion-activatable"
    >
      <div slot="start" className="ion-text-end">
        <small>
          <strong>{dayjs(event.start_time).format(timeFormat)}</strong>
          <br />
          <IonText color="medium">
            {dayjs(event.end_time).format(timeFormat)}
          </IonText>
        </small>
      </div>

      <IonLabel>
        <span>{event.title}</span>
        {location && (
          <p>
            <IonText color="medium">
              <small>{location.name}</small>
            </IonText>
          </p>
        )}
        {expanded && (
          <div dangerouslySetInnerHTML={{ __html: event.description }} />
        )}
      </IonLabel>

      <div slot="end" className="ion-text-end">
        {expanded ? (
          <IonIcon icon={arrowDropdown} />
        ) : (
          <IonIcon icon={arrowDropleft} />
        )}
      </div>
    </IonItem>
  );
};

export default EventsListItem;

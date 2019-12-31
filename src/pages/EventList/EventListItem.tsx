import {
  IonCard,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from '@ionic/react';
import dayjs from 'dayjs';
import Interweave from 'interweave';
import { arrowDropdown, arrowDropleft } from 'ionicons/icons';
import { isNil } from 'lodash';
import React, { useCallback } from 'react';
import { useCache } from 'rest-hooks';
import EventResource from '../../resources/event';
import LocationResource from '../../resources/location';
import RoomAssignmentsButton from './RoomAssignmentsButton';

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

  const expandable = !!event.description;

  return (
    <IonCard
      onClick={expandable ? memoizedOnClick : undefined}
      className="event-list-item"
      button={expandable}
    >
      <IonGrid>
        <IonRow>
          <IonCol size="3" className="ion-text-end">
            <div className="event-times">
              <span>
                <strong>{dayjs(event.start_time).format(timeFormat)}</strong>
                <br />
                <IonText color="medium">
                  {dayjs(event.end_time).format(timeFormat)}
                </IonText>
              </span>
            </div>
          </IonCol>

          <IonCol>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-location">
              {location && !event.room_assignments && location.name}
            </p>
            {expandable && expanded && (
              <Interweave content={event.description} />
            )}
            <RoomAssignmentsButton kind={event.room_assignments} />
          </IonCol>

          {expandable && (
            <IonCol size="1">
              <div className="expanding-indicator">
                {expanded ? (
                  <IonIcon icon={arrowDropdown} />
                ) : (
                  <IonIcon icon={arrowDropleft} />
                )}
              </div>
            </IonCol>
          )}
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default EventsListItem;

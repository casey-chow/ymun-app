import {
  IonIcon,
  IonItem,
  IonLabel,
  IonRippleEffect,
  IonText,
  isPlatform,
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
    <IonItem
      onClick={expandable ? memoizedOnClick : undefined}
      className="ion-activatable"
      detail={false}
      button={expandable} // needed for ripple: https://git.io/JeQM7
    >
      {isPlatform('ios') || <IonRippleEffect />}
      <div
        slot="start"
        className="ion-text-end"
        style={{
          width: '4rem',
          position: expanded ? 'absolute' : 'static',
          top: '8px',
        }}
      >
        <small>
          <strong>{dayjs(event.start_time).format(timeFormat)}</strong>
          <br />
          <IonText color="medium">
            {dayjs(event.end_time).format(timeFormat)}
          </IonText>
        </small>
      </div>

      <IonLabel
        style={{ marginLeft: expanded ? '4.75rem' : '0', whiteSpace: 'normal' }}
      >
        <span>{event.title}</span>
        <p>{location && !event.room_assignments && location.name}</p>
        {expandable && expanded && <Interweave content={event.description} />}
        <RoomAssignmentsButton kind={event.room_assignments} />
      </IonLabel>

      {expandable && (
        <div slot="end" className="ion-text-end">
          {expanded ? (
            <IonIcon icon={arrowDropdown} />
          ) : (
            <IonIcon icon={arrowDropleft} />
          )}
        </div>
      )}
    </IonItem>
  );
};

export default EventsListItem;

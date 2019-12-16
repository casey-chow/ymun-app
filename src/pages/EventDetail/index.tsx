import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import dayjs from 'dayjs';
import { locate, time } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useResource } from 'rest-hooks';
import EventResource from '../../resources/event';
import FileResource from '../../resources/file';
import LocationResource from '../../resources/location';

type EventDetailProps = RouteComponentProps<{
  id: string;
}>;

const timeFormat = 'h:mm A';

const EventDetail: React.FC<EventDetailProps> = ({
  match: {
    params: { id },
  },
}) => {
  const event = useResource(EventResource.detailShape(), { id });
  const location = useResource(
    LocationResource.detailShape(),
    event.location ? { id: event.location } : null
  );
  const map = useResource(
    FileResource.detailShape(),
    location && location.map ? { id: location.map } : null
  );

  // const event = new EventResource();

  // Object.assign(event, {
  //   id: 1,
  //   status: 'published',
  //   title: 'Delegate Dance',
  //   description: "<p>Don't forget to bring your clothes!<br></p>",
  //   start_time: '2020-01-05 14:30:00',
  //   end_time: '2020-01-05 15:30:00',
  //   location: 1,
  // });

  // TODO: There has to be a more correct way to style these.
  const timeView = (
    <div>
      <IonIcon
        icon={time}
        color="medium"
        style={{ display: 'inline', float: 'left', paddingTop: '2px' }}
      />
      <IonText color="medium" style={{ paddingLeft: '6px' }}>
        <h2
          style={{
            display: 'inline',
            fontSize: '16px',
          }}
        >
          {dayjs(event.start_time).format(timeFormat)} -&nbsp;
          {dayjs(event.end_time).format(timeFormat)}
        </h2>
      </IonText>
    </div>
  );

  const locationView = location && (
    <div>
      <IonIcon
        icon={locate}
        color="medium"
        style={{ display: 'inline', float: 'left', paddingTop: '2px' }}
      />
      <IonText color="medium" style={{ paddingLeft: '6px' }}>
        <h2
          style={{
            display: 'inline',
            fontSize: '16px',
          }}
        >
          {location.name}
        </h2>
      </IonText>
    </div>
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/events" text="Schedule" />
          </IonButtons>
          <IonTitle>Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 style={{ fontSize: '34px', fontWeight: 'bold' }}>
                {event.title}
              </h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{timeView}</IonCol>
          </IonRow>
          {event.location && (
            <IonRow>
              <IonCol>{locationView}</IonCol>
            </IonRow>
          )}
          <IonRow>
            <IonCol>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </IonCol>
          </IonRow>
          {map && (
            <IonRow>
              <IonCol>
                <IonImg src={map.data.url} />
              </IonCol>
            </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EventDetail;

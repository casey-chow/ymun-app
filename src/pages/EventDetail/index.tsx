import {
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import dayjs from 'dayjs';
import { time } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useResource } from 'rest-hooks';
import EventResource from '../../resources/event';

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
          <IonRow>
            <IonCol>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EventDetail;

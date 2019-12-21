import React from 'react';
import { IonSlides, IonSlide, IonCard, IonCardContent } from '@ionic/react';
import { useResource } from 'rest-hooks';
import TextResource from '../../resources/announcement';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  spaceBetween: 0,
};

const styles = {
  card: {
    width: '100vw',
  },
  button: {},
};

/**
 * Creates a slide for a new announcement.
 * @param text the message we want to announce.
 * @param key the index (id) of the announcement slide.
 * @returns JSX element representing an announcement slide.
 */
const makeAnnouncement = (body: string, id: number): JSX.Element => {
  return (
    <IonSlide key={id}>
      <IonCard color={'secondary'} key={id} style={styles.card}>
        <IonCardContent>{body}</IonCardContent>
      </IonCard>
    </IonSlide>
  );
};

const Announcements: React.FC = () => {
  const announcements = useResource(TextResource.listShape(), {});

  return (
    <IonSlides pager={true} options={slideOpts}>
      {announcements.map((annoucement) => {
        return makeAnnouncement(annoucement.body, annoucement.created_by.id);
      })}
    </IonSlides>
  );
};

export default Announcements;

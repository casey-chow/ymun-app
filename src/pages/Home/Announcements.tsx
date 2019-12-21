import React from 'react';
import { IonSlides, IonSlide, IonCard, IonCardContent } from '@ionic/react';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  freeMode: false,
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
const makeAnnouncement = (text: string, key: number): JSX.Element => {
  return (
    <IonSlide key={key}>
      <IonCard color={'secondary'} key={key} style={styles.card}>
        <IonCardContent>{text}</IonCardContent>
      </IonCard>
    </IonSlide>
  );
};

const Announcements: React.FC = () => {
  // TODO: get the announcements from our backend.
  const announcements = [
    "I AIN'T WRITE A RESOLUTION BUT I STILL GET BUCKETS",
    'LIBERATE YOURSELF FROM THE SHACKLES OF CIRCUMSTANCE',
    'THE VIEW IS GREAT',
    "AND ON THE 8TH DAY, GOD SAID 'LET THERE BE PIEVAN'",
    "WHAT'S A KING TO A GOD? WHAT'S A GOD TO ALEX WOLKOMIR?",
  ];

  return (
    <IonSlides pager={true} options={slideOpts}>
      {announcements.map((announcement: string, i: number) => {
        return makeAnnouncement(announcement, i);
      })}
    </IonSlides>
  );
};

export default Announcements;

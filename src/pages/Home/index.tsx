import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  isPlatform,
} from '@ionic/react';
import PhotoSlider from './PhotoSlider';
import Announcements from './Announcements';
import UpNextTime from './UpNextTime';
import UpNextEvent from './UpNextEvent';
import News from './News';

const styles = {
  logo: {
    display: 'block',
    maxWidth: '40px',
    maxHeight: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  iOSTitle: {
    paddingTop: '25px',
    width: 'auto',
    marginLeft: '-64px',
    textAlign: 'left',
  },
  iOSButton: {
    width: 'auto',
    height: '25px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-5px',
    right: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  androidTitle: {
    paddingTop: '25px',
    width: 'auto',
    textAlign: 'left',
  },
  androidButton: {
    width: 'auto',
    height: '25px',
    position: 'absolute',
    zIndex: '99',
    bottom: '-20px',
    right: '20px',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonImg
            src="/assets/ymca-logo.png"
            alt="ymca-logo"
            style={styles.logo}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <PhotoSlider />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                Announcements
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Announcements />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                Up Next
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <UpNextTime />
            </IonCol>
            <IonCol>
              <UpNextEvent />
              <IonButton
                color={'primary'}
                size={'small'}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
                href={'/events'}
              >
                SCHEDULE
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={
                  isPlatform('ios') ? styles.iOSTitle : styles.androidTitle
                }
              >
                News
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <News />
              <IonButton
                color={'primary'}
                size={'small'}
                fill={'outline'}
                style={
                  isPlatform('ios') ? styles.iOSButton : styles.androidButton
                }
                href={'/posts'}
              >
                NEWS
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

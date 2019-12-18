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
} from '@ionic/react';
import PhotoSlider from './PhotoSlider';
import Announcements from './Announcements';
import UpNextTime from './UpNextTime';
import UpNextEvent from './UpNextEvent';

const styles = {
  logo: {
    display: 'block',
    maxWidth: '40px',
    maxHeight: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonImg
              src="/assets/ymca-logo.png"
              alt="ymca-logo"
              style={styles.logo}
            />
          </IonTitle>
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
                class="ion-text-left"
                style={{
                  paddingTop: '25px',
                  marginLeft: '-65px',
                  width: 'auto',
                }}
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
                class="ion-text-left"
                style={{
                  paddingTop: '25px',
                  marginLeft: '-65px',
                  width: 'auto',
                }}
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

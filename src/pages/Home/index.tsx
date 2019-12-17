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
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonButton, IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import News from './News';
import UpNext from './UpNext';

const HomeInner: React.FC = () => {
  return (
    <>
      <IonContent className="page-home">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 className="ion-text-center ion-text-uppercase">
                YMCA Model United Nations
              </h1>
              <h2 className="ion-text-center">January 3-5</h2>
            </IonCol>
          </IonRow>
          {/* <IonRow>
            <IonCol>
              <h1> Announcements </h1>
              <Announcements />
            </IonCol>
          </IonRow> */}
          <IonRow>
            <IonCol size="12">
              <h1>Up Next</h1>
            </IonCol>
            <IonCol>
              <UpNext />
              <IonButton
                color="light"
                fill="solid"
                // style={
                //   isPlatform('ios') ? styles.iOSButton : styles.androidButton
                // }
                href="/events"
              >
                Schedule
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h1>News</h1>
              <News />
              <IonButton color="light" href="/posts">
                News
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default HomeInner;

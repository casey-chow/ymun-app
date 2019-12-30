import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import FollowThroughButton from './FollowThroughButton';
import News from './News';
import SectionHeader from './SectionHeader';
import UpNext from './UpNext';

const HomeInner: React.FC = () => {
  return (
    <>
      <IonContent className="page-home">
        <div className="home-top">
          <IonGrid>
            <IonRow>
              <IonCol>
                <h1 className="home-header-text ion-text-center ion-text-uppercase">
                  YMCA Model United Nations 2020
                </h1>
                <h2 className="home-subheader-text ion-text-center">
                  January 3-5
                </h2>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        <IonGrid>
          {/* <IonRow>
            <IonCol>
              <h1> Announcements </h1>
              <Announcements />
            </IonCol>
          </IonRow> */}
          <IonRow>
            <IonCol size="12">
              <SectionHeader>Up Next</SectionHeader>
            </IonCol>
            <IonCol>
              <UpNext />
              <FollowThroughButton href="/events">Schedule</FollowThroughButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <SectionHeader>News</SectionHeader>
              <News />
              <FollowThroughButton href="/posts">News</FollowThroughButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default HomeInner;

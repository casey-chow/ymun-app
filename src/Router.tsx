import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, calendar, time, send } from 'ionicons/icons';
import React, { FC } from 'react';
import { Redirect, Route } from 'react-router';
import Details from './pages/Details';
import EventDetail from './pages/EventDetail';
import EventList from './pages/EventList';
import Posts from './pages/Posts';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const Router: FC = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/posts" component={Posts} exact />
          <Route path="/events" component={EventList} exact />
          <Route path="/events/:id" component={EventDetail} />
          <Route path="/tab1" component={Tab1} exact />
          <Route path="/tab2" component={Tab2} exact />
          <Route path="/tab2/details" component={Details} />
          <Route path="/tab3" component={Tab3} />
          <Route
            path="/"
            render={() => <Redirect to="/posts" />}
            exact={true}
          />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="posts" href="/posts">
            <IonIcon icon={time} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="events" href="/events">
            <IonIcon icon={calendar} />
            <IonLabel>Schedule</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={apps} />
            <IonLabel>Tab Two</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={send} />
            <IonLabel>Tab Three</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};
export default Router;

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { book, calendar, home, time } from 'ionicons/icons';
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';
import EventDetail from './pages/EventDetail';
import EventList from './pages/EventList';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts';
import Press from './pages/PressHome/index';
import ResourceCategoryDetail from './pages/ResourceCategoryDetail/index';
import ResourceCategoryList from './pages/ResourceCategoryList/index';
import ResourcePageDetail from './pages/ResourcePageDetail/index';
import Rooms from './pages/Rooms';
/* Theme variables */
import './theme/variables.css';
import PhotoSlider from './pages/Home/PhotoSlider';

const App: React.FC = () => (
  <CacheProvider>
    <IonApp>
      <Suspense fallback={<IonSpinner />}>
        <NetworkErrorBoundary>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/press" component={Press} exact={true} />
                <Route path="/gallery" component={PhotoSlider} exact={true} />
                <Route path="/rooms" component={Rooms} exact={true} />
                <Route path="/posts" component={Posts} exact={true} />
                <Route path="/posts/:id" component={PostDetail} />
                <Route path="/events" component={EventList} exact={true} />
                <Route path="/events/:id" component={EventDetail} />
                <Route path="/pages/:id" component={ResourcePageDetail} />
                <Route
                  path="/resources/:id"
                  component={ResourceCategoryDetail}
                />
                <Route
                  path="/resources"
                  component={ResourceCategoryList}
                  exact={true}
                />
                <Route path="/home" component={Home} exact={true} />
                <Route
                  path="/"
                  render={() => <Redirect to="/press" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="Home" href="/home">
                  <IonIcon icon={time} />
                  <IonLabel>Posts</IonLabel>
                </IonTabButton>
                {/* <IonTabButton tab="rooms" href="/rooms">
                  <IonIcon icon={map} />
                  <IonLabel>Rooms</IonLabel>
                </IonTabButton> */}
                <IonTabButton tab="Press" href="/press">
                  <IonIcon icon={home} />
                  <IonLabel>Press</IonLabel>
                </IonTabButton>
                <IonTabButton tab="events" href="/events">
                  <IonIcon icon={calendar} />
                  <IonLabel>Schedule</IonLabel>
                </IonTabButton>
                <IonTabButton tab="resources" href="/resources">
                  <IonIcon icon={book} />
                  <IonLabel>Resources</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </NetworkErrorBoundary>
      </Suspense>
    </IonApp>
  </CacheProvider>
);

export default App;

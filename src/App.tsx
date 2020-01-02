import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
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
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';
import NetworkErrorFallback from './components/NetworkErrorFallback';
import SuspenseFallback from './components/SuspenseFallback';
import CommitteeRoomAssignments from './pages/CommitteeRoomAssignments/index';
import CountryCaucusRoomAssignments from './pages/CountryCaucusRoomAssignments';
import DelegationMeetingRoomAssignments from './pages/DelegationMeetingRoomAssignments/index';
import EventDetail from './pages/EventDetail';
import EventList from './pages/EventList';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import LocationDetail from './pages/LocationDetail';
import MapDetail from './pages/MapDetail/index';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Press from './pages/PressHome/index';
import ResourceCategoryDetail from './pages/ResourceCategoryDetail/index';
import ResourceCategoryList from './pages/ResourceCategoryList/index';
import ResourcePageDetail from './pages/ResourcePageDetail/index';
import RoomAssignments from './pages/RoomAssignments';

/* Theme variables */
import './theme/variables.css';
import './theme/custom.css';

const App: React.FC = () => (
  <CacheProvider>
    <IonApp>
      <Suspense fallback={<SuspenseFallback />}>
        <NetworkErrorBoundary fallbackComponent={NetworkErrorFallback}>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/press" component={Press} exact={true} />
                <Route path="/gallery" component={Gallery} exact={true} />
                <Route
                  path="/rooms/committees"
                  component={CommitteeRoomAssignments}
                  exact
                />
                <Route
                  path="/rooms/country-caucus"
                  component={CountryCaucusRoomAssignments}
                  exact
                />
                <Route
                  path="/rooms/delegation-meetings"
                  component={DelegationMeetingRoomAssignments}
                  exact
                />
                <Route path="/rooms" component={RoomAssignments} exact={true} />
                <Route path="/locations/:id" component={LocationDetail} />
                <Route path="/maps/:id" component={MapDetail} />
                <Route path="/posts" component={PostList} exact={true} />
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
                  render={() => <Redirect to="/home" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="events" href="/events">
                  <IonIcon src="/assets/calendar.svg" />
                  <IonLabel>Schedule</IonLabel>
                </IonTabButton>
                <IonTabButton tab="press" href="/posts">
                  <IonIcon src="/assets/globe.svg" />
                  <IonLabel>Press</IonLabel>
                </IonTabButton>
                <IonTabButton
                  tab="home"
                  href="/home"
                  className="home-tab"
                  layout="label-hide"
                >
                  <IonIcon src="/assets/home.svg" />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="rooms" href="/rooms">
                  <IonIcon src="/assets/compass.svg" />
                  <IonLabel>Rooms</IonLabel>
                </IonTabButton>
                <IonTabButton tab="resources" href="/resources">
                  <IonIcon src="/assets/page.svg" />
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

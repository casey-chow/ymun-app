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
import { book, calendar, time } from 'ionicons/icons';
import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { CacheProvider, NetworkErrorBoundary } from 'rest-hooks';
import EventDetail from './pages/EventDetail';
import EventList from './pages/EventList';
import PostDetail from './pages/PostDetail';
import Posts from './pages/Posts';
import Press from './pages/PressHome/index';
import ResourceCategoryDetail from './pages/ResourceCategoryDetail/index';
import ResourceCategoryList from './pages/ResourceCategoryList/index';
import ResourcePageDetail from './pages/ResourcePageDetail/index';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <CacheProvider>
    <IonApp>
      <Suspense fallback={<IonSpinner />}>
        <NetworkErrorBoundary>
          <IonReactRouter>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/press" component={Press} exact />
                <Route path="/posts" component={Posts} exact />
                <Route path="/posts/:id" component={PostDetail} />
                <Route path="/events" component={EventList} exact />
                <Route path="/events/:id" component={EventDetail} />
                <Route path="/pages/:id" component={ResourcePageDetail} />
                <Route
                  path="/resources/:id"
                  component={ResourceCategoryDetail}
                />
                <Route
                  path="/resources"
                  component={ResourceCategoryList}
                  exact
                />
                <Route
                  path="/"
                  render={() => <Redirect to="/press" />}
                  exact={true}
                />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="Press" href="/press">
                  <IonIcon icon={time} />
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

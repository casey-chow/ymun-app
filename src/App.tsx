import { IonApp } from '@ionic/react';
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
import { PersistGate } from 'redux-persist/integration/react';
import { ExternalCacheProvider, NetworkErrorBoundary } from 'rest-hooks';
import Loading from './components/Loading';
import Router from './Router';
import { persistor, restHooksSelector, store } from './store';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <ExternalCacheProvider store={store} selector={restHooksSelector}>
        <Suspense fallback={<Loading />}>
          <NetworkErrorBoundary fallbackComponent={() => <h1>Error</h1>}>
            <Router />
          </NetworkErrorBoundary>
        </Suspense>
      </ExternalCacheProvider>
    </PersistGate>
  </IonApp>
);
export default App;

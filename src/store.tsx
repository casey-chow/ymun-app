import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  NetworkManager,
  PromiseifyMiddleware,
  reducer as restHooksReducer,
} from 'rest-hooks';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const expiryMs = 60 * 60 * 1000;
const manager = new NetworkManager(expiryMs, 1000);

const restHooksPersistConfig = {
  key: 'restHooks',
  storage,
  // stateReconciler: autoMergeLevel2,
  debug: true,
};

const reducer = persistReducer(
  restHooksPersistConfig,
  combineReducers({
    restHooks: restHooksReducer,
  })
);
const composeEnhancers = composeWithDevTools({});

// Configured per instructions from:
// https://github.com/coinbase/rest-hooks/blob/master/docs/guides/redux.md
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(manager.getMiddleware(), PromiseifyMiddleware)
  )
);

export const persistor = persistStore(store);

export const restHooksSelector = (
  state: ReturnType<typeof reducer>
): ReturnType<typeof restHooksReducer> => state.restHooks;

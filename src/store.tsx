import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  NetworkManager,
  PromiseifyMiddleware,
  reducer as restHooksReducer,
} from 'rest-hooks';

const manager = new NetworkManager();

const reducer = combineReducers({
  restHooks: restHooksReducer,
});

const composeEnhancers = composeWithDevTools({});

// Configured per instructions from:
// https://github.com/coinbase/rest-hooks/blob/master/docs/guides/redux.md
export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(manager.getMiddleware(), PromiseifyMiddleware)
  )
);

export const restHooksSelector = (
  state: ReturnType<typeof reducer>
): ReturnType<typeof restHooksReducer> => state.restHooks;

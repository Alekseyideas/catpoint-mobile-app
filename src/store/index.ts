import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import sagas from './rootSaga';
import reducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose()(createStore);

const composeEnhancers = composeWithDevTools({});

const store = createStoreWithMiddleware(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default store;

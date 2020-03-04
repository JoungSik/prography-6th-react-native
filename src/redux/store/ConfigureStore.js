import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "~/redux/modules";
import rootSaga from "~/sagas";

const sagaMiddleware = createSagaMiddleware();

const CreateStore = () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, composeEnhancers(middleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default CreateStore;

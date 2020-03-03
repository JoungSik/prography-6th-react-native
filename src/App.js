/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Screen from '~/screens';
import ConfigureStore from "~/redux/store/ConfigureStore";
import { Provider } from "react-redux";

const store = ConfigureStore();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  )
};

export default App;

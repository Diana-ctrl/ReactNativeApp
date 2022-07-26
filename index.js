import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src';
import 'react-native-gesture-handler';
import {store} from './src/toolkit';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);

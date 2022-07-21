import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from './src';
import 'react-native-gesture-handler';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;

AppRegistry.registerComponent(appName, () => AppContainer);

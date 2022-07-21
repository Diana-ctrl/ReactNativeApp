import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {SafeAreaProvider} from 'react-native-safe-area-context';

// import NetInfo from '@react-native-community/netinfo';
// import Orientation from 'react-native-orientation';

import RootStack from './navigation';

// import STRINGS from './localization';
// import { colors } from './styles';

const App = () => {
  const dispatch = useDispatch();
  const appData = useSelector(store => store.app);
  const userData = useSelector(store => store.user);

  return (
    <SafeAreaProvider>
      <RootStack />
      {/* {!internetStatus ? <NoInternetConnection /> : null} */}
    </SafeAreaProvider>
  );
};

export default App;

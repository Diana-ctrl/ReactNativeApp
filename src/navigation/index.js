import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {color} from '../components/styles';

import AuthStack from './auth';
// import MainStack from './main';
// import screens from '../screens';

const RootStackNav = createStackNavigator();

const RootStack = () => {
  const userData = useSelector(store => store.user);
  const appData = useSelector(store => store.app);

  return (
    <RootStackNav.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <Ionicons name={iconName} color={color.gradient[0]} size={30} />
          );
        },
        tabBarActiveTintColor: color.gradient[0],
        tabBarInactiveTintColor: color.gradient[1],
      })}>
      {userData.role === 'user' ? (
        <RootStackNav.Screen
          name="Main"
          options={{
            headerShown: false,
          }}
          component={MainStack}
        />
      ) : (
        <RootStackNav.Screen
          name="Auth"
          options={{
            headerShown: false,
          }}
          component={AuthStack}
        />
      )}
    </RootStackNav.Navigator>
  );
};

export default RootStack;

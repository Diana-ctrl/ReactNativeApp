import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cart} from '../screens/CartScreen';
import {Profile} from '../screens/ProfileScreen';
import {Home} from '../screens/HomeScreen';
import {Category1} from '../screens/Category1';
import {Category2} from '../screens/Category2';
import {Category3} from '../screens/Category3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const TabStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tab"
        component={TabStack}
      />
      <Stack.Screen
        name="Category1"
        component={Category1}
        options={{title: 'Category first'}}
      />
      <Stack.Screen
        name="Category2"
        component={Category2}
        options={{title: 'Category second'}}
      />
      <Stack.Screen
        name="Category3"
        component={Category3}
        options={{title: 'Category Third'}}
      />
    </Stack.Navigator>
  );
};

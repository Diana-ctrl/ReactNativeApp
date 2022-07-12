import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cart} from '../screens/CartScreen';
import {Profile} from '../screens/ProfileScreen';
import {Home} from '../screens/HomeScreen';
import {Category1} from '../screens/Category1';
import {Category2} from '../screens/Category2';
import {Category3} from '../screens/Category3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const TabStack = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} color={'#008000'} size={30} />;
          },
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: '#228B22',
        })}>
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

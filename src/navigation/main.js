import React from 'react';

import {useSelector} from 'react-redux';

import {createStackNavigator} from '@react-navigation/stack';

import screens from '../screens';

import {GoBackButton} from '../components';
import {Cart} from '../screens/CartScreen';
import {Profile} from '../screens/ProfileScreen';
import {Home} from '../screens/HomeScreen';
import {colors} from '../styles';

const HomeStackNav = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator
      screenOptions={({ navigation }) => ({
        // headerLeft: props => <GoBackButton {...props} onPress={() => navigation.goBack()} />,
        headerShown: false,
      })}>
      <HomeStackNav.Screen name="Home" component={Home} />
      <HomeStackNav.Screen name="Cart" component={Cart} />
      <HomeStackNav.Screen name="Profile" component={Profile} />
    </HomeStackNav.Navigator>
  );
};

const SettingStackNav = createStackNavigator();

const SettingStack = () => {
  return (
    <SettingStackNav.Navigator>
      <SettingStackNav.Screen
        name="Settings"
        component={screens.Settings}
        options={{
          headerShown: false,
        }}
      />
    </SettingStackNav.Navigator>
  );
};

const MainStackNav = createStackNavigator();

const MainStack = () => {
  const userData = useSelector(store => store.user);

  return (
    <MainStackNav.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <MainStackNav.Screen
        name="HomeStack"
        options={{
          headerShown: false,
        }}
        component={HomeStack}
      />
      <MainStackNav.Screen
        name="SettingsStack"
        options={{
          headerShown: false,
        }}
        component={SettingStack}
      />
      <MainStackNav.Screen
        name="PersonalData"
        component={screens.PersonalData}
        options={{
          headerShown: false,
        }}
      />
      <MainStackNav.Screen
        name="AboutApp"
        component={screens.AboutApp}
        options={{
          headerShown: false,
        }}
      />

      {userData.role === 'guest' && (
        <MainStackNav.Screen
          name="Guest"
          options={{
            headerShown: false,
          }}
          component={screens.Guest}
        />
      )}
      <MainStackNav.Screen
        options={({navigation}) => ({
          headerTransparent: true,
          title: '',
          headerTintColor: colors.grayscale[10],
          headerLeft: props => (
            <GoBackButton
              {...props}
              onPress={() => navigation.goBack()}
              color={colors.grayscale[10]}
            />
          ),
        })}
        name="LogIn"
        component={screens.LogIn}
      />
      <MainStackNav.Screen
        options={({navigation}) => ({
          headerTransparent: true,
          title: '',
          headerTintColor: colors.grayscale[10],
          headerLeft: props => (
            <GoBackButton
              {...props}
              onPress={() => navigation.goBack()}
              color={colors.grayscale[10]}
            />
          ),
        })}
        name="SignUp"
        component={screens.SignUp}
      />
      <MainStackNav.Screen
        options={({navigation}) => ({
          headerTransparent: true,
          title: '',
          headerTintColor: colors.grayscale[10],
          headerLeft: props => (
            <GoBackButton
              {...props}
              onPress={() => navigation.goBack()}
              color={colors.grayscale[10]}
            />
          ),
        })}
        name="ForgotPassword"
        component={screens.ForgotPassword}
      />
    </MainStackNav.Navigator>
  );
};

export default MainStack;

import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import screens from '../screens';

import {colors} from '../styles';
import {GoBackButton} from '../components';

const AuthStackNav = createStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator initialRouteName="FirstScreen">
      <AuthStackNav.Screen
        options={{
          headerTransparent: true,
          title: '',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
        name="FirstScreen"
        component={screens.FirstScreen}
      />
      <AuthStackNav.Screen
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
      <AuthStackNav.Screen
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
      {/* <AuthStackNav.Screen
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
      /> */}
    </AuthStackNav.Navigator>
  );
};

export default AuthStack;

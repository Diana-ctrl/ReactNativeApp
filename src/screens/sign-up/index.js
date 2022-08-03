import React, {useState, useEffect, useRef} from 'react';
import SignUpView from './sign-up-view';
import {Animated, Easing} from 'react-native';

const SignUpContainer = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const foodRoutate = new Animated.Value(0);

  const startFoodRoutate = () => {
    foodRoutate.setValue(0);
    Animated.timing(foodRoutate, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(startFoodRoutate);
  };

  const rotateData = foodRoutate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const onChangeEmail = event => {
    setEmail(event);
  };

  const onChangePassword = event => {
    setPassword(event);
  };

  const goToLogInScreen = () => {
    props.navigation.navigate('LogIn');
  };
  useEffect(() => {
    startFoodRoutate();
  }, []);

  return (
    <SignUpView
      email={email}
      password={password}
      rotateData={rotateData}
      goToLogInScreen={goToLogInScreen}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default SignUpContainer;

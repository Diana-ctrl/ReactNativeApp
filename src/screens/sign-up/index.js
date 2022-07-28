import React, {useState, useEffect, useRef} from 'react';
import SignUpView from './sign-up-view';
import {Animated, Easing} from 'react-native';

const SignUpContainer = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const carrotsetX = useRef(new Animated.Value(0)).current;
  const coffeesetY = useRef(new Animated.Value(0)).current;
  const foodRoutate = new Animated.Value(0);

  const startMoveCarrot = () => {
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(carrotsetX, {
        toValue: -20,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(carrotsetX, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(startMoveCarrot);
  };

  const startMoveCoffee = () => {
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(coffeesetY, {
        toValue: 20,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(coffeesetY, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(startMoveCoffee);
  };

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
    startMoveCarrot();
    startMoveCoffee();
    startFoodRoutate();
  }, []);

  return (
    <SignUpView
      email={email}
      password={password}
      carrotsetX={carrotsetX}
      coffeesetY={coffeesetY}
      rotateData={rotateData}
      goToLogInScreen={goToLogInScreen}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default SignUpContainer;

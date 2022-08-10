import React, {useRef, useState, useEffect} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import LogInView from './log-in-view';
import {updateUserData} from '../../store/reducers/user';

const LogInContainer = props => {
  const carrotsetX = useRef(new Animated.Value(0)).current;
  const coffeesetY = useRef(new Animated.Value(0)).current;

  const startMoveCarrot = () => {
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(carrotsetX, {
        toValue: 150,
        duration: 3500,
        useNativeDriver: true,
      }),
      Animated.timing(carrotsetX, {
        toValue: -150,
        duration: 3500,
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
  useEffect(() => {
    startMoveCarrot();
    startMoveCoffee();
  }, []);

  return <LogInView carrotsetX={carrotsetX} coffeesetY={coffeesetY} />;
};

export default LogInContainer;

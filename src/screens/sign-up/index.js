import React, {useState, useEffect, useRef} from 'react';
import SignUpView from './sign-up-view';
import {Animated} from 'react-native';

const SignUpContainer = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const offsetY = useRef(new Animated.Value(0)).current;

  const startMove = () => {
    Animated.sequence([
      Animated.delay(100),
      Animated.timing(offsetY, {
        toValue: -20,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(offsetY, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(startMove);
  };

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
    startMove();
  }, []);

  return (
    <SignUpView
      email={email}
      password={password}
      offsetY={offsetY}
      goToLogInScreen={goToLogInScreen}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default SignUpContainer;

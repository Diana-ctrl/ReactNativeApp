import React, {useRef, useState} from 'react';

import { animateLayout } from '@tapston/react-native-animation';

import {useDispatch} from 'react-redux';

import LogInView from './log-in-view';

import Utils from '../../utils/utils';
import { updateUserData } from '../../store/reducers/user';

import STRINGS from '../../localization';

const LogInContainer = props => {
  const {
    route: { params },
  } = props;
  const { onComplete } = params || {};

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setLoading] = useState(false);

  const [emailErrorText, setEmailErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');

  const passwordInputRef = useRef();

  const onChangeEmail = value => {
    if (emailErrorText) {
      setEmailErrorText('');
    }
    setEmail(value);
  };
  const onChangePassword = value => {
    if (passwordErrorText) {
      setPasswordErrorText('');
    }
    setPassword(value);
  };

  const onSubmitEmail = () => passwordInputRef.current.focus();

  const handleForgotPassword = () => props.navigation.navigate('ForgotPassword');

  const handleLogIn = async () => {
    try {
      setLoading(true);
      const data = await AuthService.signIn(email, password);
      dispatch(updateUserData(data));
      setLoading(false);

      onComplete?.();
    } catch (error) {
      setLoading(false);
      animateLayout();
      if (error.key === 'auth/invalid-email') {
        setEmailErrorText(STRINGS.errors.codes[error.key].title);
      } else if (error.key === 'auth/wrong-password') {
        setPasswordErrorText(STRINGS.errors.codes[error.key].title);
      } else {
        Utils.errorHandler(error);
      }
    }
  };

  return (
    <LogInView
      /**
       * Options
       */
      email={email}
      password={password}
      isLoading={isLoading}
      emailErrorText={emailErrorText}
      passwordInputRef={passwordInputRef}
      passwordErrorText={passwordErrorText}
      /**
       * Methods
       */
      handleLogIn={handleLogIn}
      onSubmitEmail={onSubmitEmail}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      handleForgotPassword={handleForgotPassword}
    />
  );
};

export default LogInContainer;

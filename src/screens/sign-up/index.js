import React, {useState} from 'react';
import SignUpView from './sign-up-view';

const SignUpContainer = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = event => {
    setEmail(event);
  };

  const onChangePassword = event => {
    setPassword(event);
  };

  const goToLogInScreen = () => {
    props.navigation.navigate('LogIn');
  };

  return (
    <SignUpView
      email={email}
      password={password}
      goToLogInScreen={goToLogInScreen}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
};

export default SignUpContainer;

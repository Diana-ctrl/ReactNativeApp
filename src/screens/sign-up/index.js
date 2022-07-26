import React, {useState} from 'react';
import SignUpView from './sign-up-view';

const SignUpContainer = props => {
  const [email, setEmail] = useState('');

  const onChangeEmail = event => {
    setEmail(event);
  }
  const goToLogInScreen = () => {
    props.navigation.navigate('LogIn');
  };

  return (
    <SignUpView
      email={email}
      goToLogInScreen={goToLogInScreen}
      onChangeEmail={onChangeEmail}
    />
  );
};

export default SignUpContainer;

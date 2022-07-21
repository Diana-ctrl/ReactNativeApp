import React from 'react';
import FirstScreenView from './first-screen-view';

export const FirstScreen = props => {
  const handleLogIn = () => props.navigation.navigate('LogIn');
  const handleSignUp = () => props.navigation.navigate('SignUp');
  return (
    <FirstScreenView handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
  );
};
export default FirstScreen;

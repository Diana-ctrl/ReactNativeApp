import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Button} from '../../components';
import STRINGS from '../../localization';

export const FirstScreenView = props => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        resizeMode="cover"
        source={require('../../assets/images/first-screen/delivery-man.webp')}
      />
      <View style={styles.contentContainer}>
        <Button
          onPress={props.handleSignUp}
          type="primary"
          value={STRINGS.firstScreen.createAccount}
        />
        <Button
          onPress={props.handleLogIn}
          type="primary"
          value={STRINGS.firstScreen.logIn}
          containerStyles={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  button: {
    marginTop: 8,
  },
  contentContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default FirstScreenView;

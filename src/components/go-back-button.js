import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import FastImage from 'react-native-fast-image';

import {hitSlop} from '../styles';

/**
 * GoBackButton component
 * @prop {function} onPress
 * @prop {string} color
 */

const GoBackButton = ({onPress = () => {}, color = 'white'}) => {
  const image =
    color === 'write'
      ? require('../assets/images/arrow-back-white.png')
      : require('../assets/images/arrow-back-black.png');
  return (
    <TouchableOpacity
      hitSlop={hitSlop}
      style={styles.container}
      onPress={onPress}>
      <FastImage style={styles.arrowBack} source={image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  arrowBack: {
    width: 12,
    height: 22,
  },
});

export default GoBackButton;

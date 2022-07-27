import React from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import {hitSlop} from '../styles';
import Ripple from 'react-native-material-ripple';

const _Touchable = props => {
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : Ripple;

  return <Touchable hitSlop={hitSlop} activeOpacity={0.75} {...props} />;
};

export default _Touchable;

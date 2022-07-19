import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors} from './styles';

/**
 * @component Text
 * @prop {String} children
 * @prop {String} fontWeight
 * @prop {Number} opacity
 * @prop {String} color
 * @prop {Number} size
 * @prop {Object} style
 * @prop {Number} numberOfLines
 * @prop {Number} lineHeight
 * @prop {Boolean} selectable
 * @prop {Function} onPress
 */
const _Text = ({
  fontSize = 16,
  fontWeight = '400',
  color = colors.black,
  children = '',
  opacity = 1,
  style = {},
  numberOfLines,
  lineHeight = fontSize * 1.4,
  selectable = false,
  onPress,
}) => {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      selectable={selectable}
      onPress={onPress}>
      {children}
    </Text>
  );
};

const styles = (fontWeight, opacity, fontSize, color, lineHeight) =>
  StyleSheet.create({
    text: {
      color,
      fontWeight,
      opacity,
      fontSize,
      lineHeight,
    },
  });

export default _Text;

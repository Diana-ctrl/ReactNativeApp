import React from 'react';
import {
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import Ripple from 'react-native-material-ripple';
import LinearGradient from 'react-native-linear-gradient';

import {Text} from '.';
import {colors} from '../styles';

/**
 * Button component
 * @prop {function} onPress
 * @prop {string} type - button type ("primary" || "secondary")
 * @prop {string} size - button size ("default" || "small")
 * @prop {string} value - button title
 * @prop {boolean} isLoading
 * @prop {boolean} disabled
 * @prop {object} containerStyles - button container additional styles
 */
const Button = ({
  onPress = () => {},
  type = 'primary',
  size = 'default',
  value = 'Button',
  isLoading = false,
  disabled = false,
  containerStyles = {},
}) => {
  const Touchable = Platform.OS === 'ios' ? TouchableOpacity : Ripple;

  const buttonStyles = getButtonStyles(disabled)[type];

  const styles = getStyles(size, buttonStyles);

  return (
    <Touchable
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.75}
      style={[styles.container, containerStyles]}>
      <Text
        fontSize={16}
        fontWeight="700"
        color={isLoading ? 'transparent' : buttonStyles.color}
        style={styles.value}>
        {value}
      </Text>
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={buttonStyles.color}
        />
      )}
      {type === 'primary' && !disabled && (
        <LinearGradient
          style={styles.gradient}
          horizontal={true}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={colors.primary.gradient}
        />
      )}
    </Touchable>
  );
};

const getButtonStyles = disabled => ({
  primary: {
    color: colors.grayscale[0],
    backgroundColor: !disabled ? 'transparent' : colors.primary.disabled,
  },
  secondary: {
    color: !disabled ? colors.primary.default : colors.grayscale[0],
    backgroundColor: !disabled ? colors.primary.light : colors.grayscale[1],
  },
});

const getStyles = (size, buttonStyles) =>
  StyleSheet.create({
    container: {
      ...(size !== 'small' && {width: '100%'}),
      height: size === 'small' ? 40 : 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32,
      ...buttonStyles,
    },
    value: {
      paddingHorizontal: 24,
    },
    activityIndicator: {position: 'absolute'},
    gradient: {
      position: 'absolute',
      zIndex: -1,
      width: '100%',
      height: '100%',
      borderRadius: 32,
    },
  });

export default Button;

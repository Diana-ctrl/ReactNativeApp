import React, {useState} from 'react';
import {Animated, Keyboard, TextInput, View, StyleSheet} from 'react-native';

//import RNStyles from '@tapston/react-native-styles';
import {animateLayout} from '@tapston/react-native-animation';

import FastImage from 'react-native-fast-image';

import {Text, Touchable} from '.';
import {colors} from '../styles';

/**
 * Input component
 * @prop {ref} inputRef
 * @prop {string} value - input value
 * @prop {string} placeholder
 * @prop {string} errorText - if input value is wrong
 * @prop {function} returnKeyType
 * @prop {boolean} disabled
 * @prop {boolean} isPasswordInput - if input needed for a password
 * @prop {boolean} blurOnSubmit
 * @prop {boolean} autoFocus
 * @prop {function} onFocus
 * @prop {function} onBlur
 * @prop {function} onChange - on value change
 * @prop {function} onSubmitEditing
 */
const Input = ({
  inputRef,
  value = '',
  placeholder = 'Placeholder',
  errorText = '',
  returnKeyType = 'default',
  containerStyles = {},
  disabled = false,
  isPasswordInput = false,
  blurOnSubmit = false,
  autoFocus = false,
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onSubmitEditing = () => {},
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(isPasswordInput);

  const [position] = useState(new Animated.Value(value ? 6 : 17));
  const [fontsize] = useState(new Animated.Value(value ? 14 : 16));

  const startHoistingAnimation = () => {
    Animated.timing(position, {
      toValue: 6,
      useNativeDriver: false,
      duration: 300,
    }).start();
    Animated.timing(fontsize, {
      toValue: 14,
      useNativeDriver: false,
      duration: 300,
    }).start();
  };
  const startDownAnimation = () => {
    Animated.timing(position, {
      toValue: 17,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(fontsize, {
      toValue: 16,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const $onFocus = () => {
    onFocus();
    setFocused(true);
    startHoistingAnimation();
  };
  const $onBlur = () => {
    onBlur();
    setFocused(false);
    if (!value) {
      startDownAnimation();
    }
  };

  const $onChange = _value => {
    animateLayout();

    onChange(_value);
  };

  const inputStyles = getInputStyles(isFocused, disabled, !!errorText);
  const styles = getStyles(inputStyles);

  return (
    <View style={[styles.container, containerStyles]}>
      <View style={styles.inputContainer}>
        {!!placeholder && (
          <Animated.Text
            style={[
              styles.label,
              {
                top: position,
                fontSize: fontsize,
              },
            ]}>
            {placeholder}
          </Animated.Text>
        )}
        <TextInput
          ref={inputRef}
          value={value}
          returnKeyType={returnKeyType}
          onChangeText={$onChange}
          selectionColor={colors.grayscale[10]}
          editable={!disabled}
          blurOnSubmit={blurOnSubmit}
          secureTextEntry={isPasswordShown}
          onFocus={$onFocus}
          autoFocus={autoFocus}
          onBlur={$onBlur}
          onSubmitEditing={onSubmitEditing}
          style={styles.input}
        />
        {!!errorText && (
          <View style={styles.imageContainer}>
            <FastImage style={styles.image} source={require('../assets/images/error.png')} />
          </View>
        )}

        {isPasswordInput && !!value && !errorText && (
          <Touchable
            onPress={() => {
              Keyboard.dismiss();
              setPasswordShown(old => !old);
            }}
            style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={
                isPasswordShown
                  ? require('../assets/images/close-eye.png')
                  : require('../assets/images/open-eye.png')
              }
            />
          </Touchable>
        )}

        {!!value && isFocused && !errorText && !isPasswordInput && (
          <Touchable
            onPress={() => {
              Keyboard.dismiss();
              $onChange('');
            }}
            style={styles.imageContainer}>
            <FastImage style={styles.image} source={require('../assets/images/cross.png')} />
          </Touchable>
        )}
      </View>
      {!!errorText && (
        <Text color={colors.error.default} lineHeight={24}>
          {errorText}
        </Text>
      )}
    </View>
  );
};

const getInputStyles = (isFocused, disabled, hasError) => ({
  textColor: disabled ? colors.grayscale[2] : colors.grayscale[10],
  borderColor: hasError
    ? colors.error.default
    : isFocused
    ? colors.grayscale[2]
    : colors.grayscale[1],
  placeholderColor: disabled
    ? colors.grayscale[2]
    : hasError
    ? colors.error.default
    : isFocused
    ? colors.primary.default
    : colors.grayscale[4],
  backgroundColor: disabled ? colors.grayscale[0.2] : 'transparent',
});

const getStyles = inputStyles =>
  StyleSheet.create({
    container: {
      width: '100%',
    },

    inputContainer: {
      width: '100%',
      height: 56,
      alignItems: 'flex-end',
      flexDirection: 'row',
      paddingHorizontal: 16,
      borderWidth: 1,
      borderRadius: 12,
      borderColor: inputStyles.borderColor,
      backgroundColor: inputStyles.backgroundColor,
    },
    label: {
      position: 'absolute',
      left: 16,
      padding: 0,
      margin: 0,
      color: inputStyles.placeholderColor,
    },
    input: {
      flex: 1,
      height: '100%',
      paddingTop: 28, // 28 - half of the height of the input
      paddingBottom: 4,
      padding: 0,
      fontSize: 16,
      color: inputStyles.textColor,
    },
    imageContainer: {
      height: '100%',
      justifyContent: 'center',
      marginLeft: 14,
      marginRight: -2,
    },
    image: {
      square: 24,
    },
  });

export default Input;

import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button, Text, Input} from '../../components';
import {colors} from '../../styles';
import STRINGS from '../../localization';
const LogInView = props => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  const $onBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <Text fontSize={24} fontWeight="700" lineHeight={28}>
            {STRINGS.logIn.back}
          </Text>
        }>
        <LinearGradient
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 0.5, y: 0}}
          colors={colors.primary.gradient}
        />
      </MaskedView>
      <Text color={colors.grayscale[4]}>
        {STRINGS.signUp.subtitle}{' '}
        <Text
          color={colors.primary.dark}
          fontWeight="700"
          onPress={props.goToLogInScreen}>
          {STRINGS.signUp.logIn}
        </Text>
      </Text>
      <View style={styles.inputBlock}>
        <Input
          value={props.email}
          placeholder={STRINGS.signUp.email}
          onChange={props.onChangeEmail}
        />
        <Input
          value={props.password}
          placeholder={STRINGS.signUp.password}
          onChange={props.onChangePassword}
          containerStyles={styles.secondInput}
        />
      </View>
      <View style={styles.containerForImgages}>
        <Animated.View
          style={[
            {
              transform: [{translateX: props.carrotsetX}],
            },
          ]}>
          <FastImage
            source={require('../../assets/images/carrot.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              transform: [{translateY: props.coffeesetY}],
            },
          ]}>
          <FastImage
            source={require('../../assets/images/hot-drink.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </Animated.View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.avoidingView}>
        <View onTouchStart={Keyboard.dismiss} style={styles.buttonContainer}>
          <Button
            disabled={props.password.length < 8 || !props.email.includes('@')}
            onPress={props.handleSignUp}
            value={STRINGS.signUp.title}
            isLoading={props.isLoading}
          />
        </View>
      </KeyboardAvoidingView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.buttonContainer}>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: insets.top + 44 + 16, // 44 - header back arrow block height
    },
    gradient: {
      height: 32,
    },
    containerView: {
      flex: 1,
    },
    input: {
      height: 50,
      margin: 12,
      padding: 12,
      borderWidth: 4,
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
  });

export default LogInView;

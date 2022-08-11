import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  Animated,
  FastImage,
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
          containerStyles={styles.input}
        />
        <Input
          value={props.password}
          placeholder={STRINGS.signUp.password}
          onChange={props.onChangePassword}
          containerStyles={styles.input}
        />
      </View>
     <View style={styles.containerForImages}>
         {/* <Animated.View
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
        </Animated.View> */}
        <Animated.Image
          style={[
            styles.img,
            {
              transform: [{translateX: props.carrotsetX}],
            },
          ]}
          source={require('../../assets/images/carrot.png')}/>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.avoidingView}>
        <View onTouchStart={Keyboard.dismiss} style={styles.buttonContainer}>
          <Button
            disabled={props.password?.length < 8 || !props.email?.includes('@')}
            onPress={props.handleSignUp}
            value={STRINGS.signUp.title}
            isLoading={props.isLoading}
          />
        </View>
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
    containerForImages: {
      display: 'flex',
      alignItems: 'center',
    },
    gradient: {
      height: 32,
    },
    input: {
      marginTop: 16,
    },
    avoidingView: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
    inputBlock: {
      display: 'flex',
      paddingBottom: 20,
    },
    img: {
      width: 150,
      height: 150,
    },
  });

export default LogInView;

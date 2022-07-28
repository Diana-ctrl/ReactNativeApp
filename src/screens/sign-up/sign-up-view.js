import React from 'react';
//import {transform} from '@babel/cores ';
import {StyleSheet, View, Animated} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, Input} from '../../components';
import FastImage from 'react-native-fast-image';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import STRINGS from '../../localization';
import {colors} from '../../styles';

const SignUpView = props => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <View style={styles.container}>
      <MaskedView
        maskElement={
          <View>
            <Text fontSize={24} fontWeight="700" lineHeight={28}>
              {STRINGS.signUp.title}
            </Text>
          </View>
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
          style=
          {[
            styles.img,
            {transform: [{rotate: props.rotateData}]}
          ]}
          source={require('../../assets/images/tableware.png')}
        />
      </View>
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
      width: '100%',
      height: 32,
    },
    inputBlock: {
      marginTop: 40,
    },
    secondInput: {
      marginTop: 10,
    },
    containerForImgages: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 10,
      justifyContent: 'center',
    },
    img: {
      height: 150,
      width: 150,
    },
  });

export default SignUpView;

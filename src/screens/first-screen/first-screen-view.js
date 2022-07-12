import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';

export const FirstScreenView = () => {
  const navigation = useNavigation();
  const handler = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          resizeMode="cover"
          source={require('../../assets/images/first-screen/delivery-man.webp')}
        />
      </View>
      {/* <TouchableOpacity onPress={() => handler()}>
        <Text>Перейти в Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    flex: 1,
  },
  image: {
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
});

export default FirstScreenView;

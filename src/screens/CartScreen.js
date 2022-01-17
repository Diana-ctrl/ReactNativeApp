import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Cart = () => {
  const navigation = useNavigation();
  const handler = () => {
    navigation.navigate('Profile');
  };
  return (
    <View>
      <TouchableOpacity onPress={() => handler()}>
        <Text>Перейти в Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

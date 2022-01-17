import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();
  const handlerForCategory1 = () => {
    navigation.navigate('Category1');
  };
  const handlerForCategory2 = () => {
    navigation.navigate('Category2');
  };
  const handlerForCategory3 = () => {
    navigation.navigate('Category3');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handlerForCategory1()}>
        <Text>Перейти в Category 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlerForCategory2()}>
        <Text>Перейти в Category 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlerForCategory3()}>
        <Text>Перейти в Category 3</Text>
      </TouchableOpacity>
    </View>
  );
};

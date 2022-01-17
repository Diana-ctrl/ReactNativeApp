import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Container = props => {
  const {children} = props;
  const navigation = useNavigation();
  return (
    <>
      <View>
        <TouchableOpacity onPress={navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <View>{children}</View>
    </>
  );
};

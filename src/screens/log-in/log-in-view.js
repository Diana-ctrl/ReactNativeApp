import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, View, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
//import MaskedView from '@react-native-masked-view/masked-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '../../components';
const LogInView = props => {
  const insets = useSafeAreaInsets();
  //const { keyboardShown } = useKeyboard();
  //const styles = getStyles(insets, keyboardShown);

  return (
    <View style={styles.container}>
      <Text>Diana</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    //paddingTop: insets.top + 44, // 44 - header back arrow block height
  },
});

export default LogInView;

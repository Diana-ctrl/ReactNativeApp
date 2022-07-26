import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '../../components';

const SignUpView = props => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);
  return (
    <View styles={styles.container}>
      <Text>diiii</Text>
    </View>
  );
};
const getStyles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });

export default SignUpView;

import React from 'react';
import {Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import MaskedView from '@react-native-masked-view/masked-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '../../components';
const LogInView = props => {
  const insets = useSafeAreaInsets();
  //const { keyboardShown } = useKeyboard();
  const styles = getStyles(insets);
  const [text, onChangeText] = React.useState('Useless Text');
  const $onBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text>Diana</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* <View onTouchStart={Keyboard.dismiss} style={styles.buttonContainer}> */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          onBlur={$onBlur}
        />
        {/* </View> */}
      </KeyboardAvoidingView>
    </View>
  );
};

const getStyles = insets =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingTop: insets.top + 44, // 44 - header back arrow block height
    },
    containerView: {
      flex: 1,
    },
    input: {
      height: 50,
      margin: 12,
      padding: 12,
      borderWidth: 4,
      //flex: 1,
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

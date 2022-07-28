import {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

import {animateLayout} from '@tapston/react-native-animation';

/**
 * @param {(value: boolean) => void} onChange
 */
export const useKeyboard = onChange => {
  const [shown, setShown] = useState(false);
  const [height, setHeight] = useState(0);

  const handleKeyboardWillShow = e => {
    setHeight(e.endCoordinates.height);
    animateLayout();
    setShown(true);
    onChange && onChange(true);
  };
  const handleKeyboardWillHide = e => {
    setHeight(e.endCoordinates.height);
    animateLayout();
    setShown(false);
    onChange && onChange(false);
  };

  useEffect(() => {
    let keyboardDidShow, keyboardDidHide;

    const keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      handleKeyboardWillShow,
    );
    const keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      handleKeyboardWillHide,
    );

    if (Platform.OS === 'android') {
      keyboardDidShow = Keyboard.addListener(
        'keyboardDidShow',
        handleKeyboardWillShow,
      );
      keyboardDidHide = Keyboard.addListener(
        'keyboardDidHide',
        handleKeyboardWillHide,
      );
    }

    return function () {
      keyboardWillShow.remove();
      keyboardWillHide.remove();

      if (Platform.OS === 'android') {
        keyboardDidShow.remove();
        keyboardDidHide.remove();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    keyboardShown: shown,
    keyboardHeight: height,
  };
};

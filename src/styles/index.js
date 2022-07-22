import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export const colors = {
  grayscale: {
    0: '#FFFFFF',
    0.2: '#F8F7FA',
    0.5: '#F1F0F2',
    1: '#E3E3E5',
    2: '#C8C6CC',
    4: '#949199',
    8: '#2E2C33',
    10: '#110C1A',
  },

  primary: {
    default: '#adff2f',
    error: '#E8484E',
    dark: '#008000',
    darkmode: '#228b22',
    light: '#90ee90',
    bg: '#F4EFFF',
    gradient: ['#2e8b57', '#98fb98'],
  },

  error: {
    default: '#E8484E',
    dark: '#C30006',
    darkmode: '#FF8488',
    light: '#FFDFE0',
    bg: '#FFF3F3',
  },

  white: '#ffffff',
  black: '#110C1A',
  obsidian: '#110C1A',
  gray: '#DFE7F8',

};

// export const hitSlop = {
//   top: RNStyles.h(16),
//   right: RNStyles.w(16),
//   bottom: RNStyles.h(16),
//   left: RNStyles.w(16),
// };

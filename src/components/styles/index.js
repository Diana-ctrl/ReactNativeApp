import { Dimensions } from 'react-native';

import RNStyles from '@tapston/react-native-styles';

const { height, width } = Dimensions.get('window');

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
    default: '#4B17B5',
    error: '#E8484E',
    dark: '#330099',
    darkmode: '#C3A4FF',
    light: '#E6DAFF',
    bg: '#F4EFFF',
    gradient: ['#4815B4', '#9836BA'],
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

  canticleOfCreation: '#FFDCA8',
  myGodAndMyAll: '#D1F7FE',
  capabilities: '#EEF7FF',
  fearAndTrust: '#DFE7F8',
  gardenOfCommunion: '#E5FBFF',
  pilgrimsAndForeigners: '#F8E6E9',

  sandstone: '#949199',
  ivory: '#F8F7FA',
  lavender: '#F4EFFF',
  purple: '#4B17B5',
  amethyst: '#9836BA',
  violet: '#4815B4',
  wine: '#330099',
  lilac: '#E6DAFF',
  dovegrey: '#C8C6CC',
  silver: '#F1F0F2',
  border: '#cad1e2',
};

export const hitSlop = {
  top: RNStyles.h(16),
  right: RNStyles.w(16),
  bottom: RNStyles.h(16),
  left: RNStyles.w(16),
};

import { StyleProp, ViewStyle } from 'react-native';
import { COLORS } from '../../styles';
import * as Icons from './assets';

export type TIconNames = keyof typeof Icons;

export type TIconComp = {
  style?: StyleProp<ViewStyle>
  name: TIconNames
  fill?: keyof typeof COLORS
  size?: number
};

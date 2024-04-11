import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import { TIconNames } from '../../../../../components/Icon/types';
import { COLORS } from '../../../../../styles/colors';

export type SocialButtonProps = TouchableHighlightProps & {
  style?: StyleProp<ViewStyle>
  icon: {
    name: TIconNames
    fill?: keyof typeof COLORS
    size?: number
  }
};

import { Dimensions, Platform } from 'react-native';
import { COLORS } from './colors';
import {
  TDimenstions,
  TCSSConstructor,
  TFlexConstructorArgs,
  TFontConstructorArgs,
  TShadowConstructorArgs,
} from './types';

export const FLEX: TCSSConstructor<TFlexConstructorArgs> = ({
  direction = 'row',
  justify = 'center',
  align = 'center',
  wrap = 'nowrap',
}) => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
  `;

export const DIMENSIONS: TDimenstions = {
  screen: Dimensions.get('screen'),
  window: Dimensions.get('window'),
};

export const SHADOW: TCSSConstructor<TShadowConstructorArgs> = ({
  x = 0,
  y = 0,
  blur = 6,
  color = COLORS.black,
}) => `
    box-shadow: ${x}px ${y}px ${blur}px ${color};
  `;

const getFontFamily = (weight: string) => {
  let fontFamily;
  if (Platform.OS === 'ios') {
    fontFamily = 'OpenSans';
  } else {
    switch (weight) {
      case '400':
        fontFamily = 'OpenSans-Regular';
        break;
      default:
        fontFamily = 'OpenSans-SemiBold';
        break;
    }
  }

  return fontFamily;
};

export const FONT: TCSSConstructor<TFontConstructorArgs> = ({
  size = 20,
  color = COLORS.black,
  weight = '400',
  transform = 'none',
}) => `
      text-transform: ${transform};
      font-family: ${getFontFamily(weight)};
      ${Platform.OS === 'ios' ? `font-weight: ${weight}` : ''};
      font-size: ${size}px;
      color: ${color};
    `;

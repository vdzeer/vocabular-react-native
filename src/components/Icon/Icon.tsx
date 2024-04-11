import React from 'react';
import { COLORS } from '../../styles';
import { TIconComp } from './types';
import * as Icons from './assets';

export function Icon({
  name, fill, size, ...props
}: TIconComp) {
  const IconComponent = Icons[name];

  return (
    <IconComponent
      width={size ?? '100%'}
      height={size ?? '100%'}
      fill={fill ? COLORS[fill] : COLORS.greyText}
      {...{ props }}
    />
  );
}

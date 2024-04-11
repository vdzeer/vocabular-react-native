export type TStyledDividerProps = {
  width?: number
  height?: number
  background?: string
};

export type TRowProps = {
  align?: TFlexAlignVariants
  justify?: TFlexJustifyVariants
};

export type TFlexAlignVariants = 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';

export type TFlexJustifyVariants =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end';

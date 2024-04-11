import styled from 'styled-components/native';
import { TRowProps, TStyledDividerProps } from './types';
import { COLORS, FLEX } from '../../styles';

export const SafeContainer = styled.SafeAreaView`
  width: 100%;
  height: 100%;

  background-color: ${COLORS.greyText};
`;

export const Divider = styled.View<TStyledDividerProps>(
  ({ width, height, background }) => `
  width: ${width || 0}px;
  height: ${height || 0}px;
  background-color: ${background || COLORS.white};
`,
);

export const Row = styled.View<TRowProps>`
  ${({ align, justify }) => FLEX({
    justify: justify || 'space-between',
    align: align || 'center',
  })};
`;

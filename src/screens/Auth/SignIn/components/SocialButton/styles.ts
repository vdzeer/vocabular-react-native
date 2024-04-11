import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';
import { COLORS } from '../../../../../styles';

export const Container = styled(TouchableHighlight)`
  border-radius: 36px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  padding: 10px;
  border-radius: 36px;
  border-width: 0.5px;
  border-color: ${COLORS.white};
  background-color: ${COLORS.white};
`;

export const IconContainer = styled.View``;

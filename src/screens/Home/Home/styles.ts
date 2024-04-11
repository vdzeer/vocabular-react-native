import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Separator = styled.View<{ padding?: number }>`
  padding: ${({ padding }) => (padding ? padding / 2 : 12)}px;
`;

export const Wrapper = styled.View`
  margin: 32px 0 25px 0;
`;

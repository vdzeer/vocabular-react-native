import React from 'react';
import { Container, ContentContainer, IconContainer } from './styles';
import { Icon } from '../../../../../components';
import { SocialButtonProps } from './types';

export function SocialButton({ icon, ...props }: SocialButtonProps) {
  return (
    <Container {...props}>
      <ContentContainer>
        <IconContainer>
          <Icon {...icon} size={icon.size ?? 28} />
        </IconContainer>
      </ContentContainer>
    </Container>
  );
}

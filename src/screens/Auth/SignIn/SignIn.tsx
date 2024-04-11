import React from 'react';

import { Container, Separator, Wrapper } from './styles';
import { SocialButton } from './components';
import { useFirebaseAuth } from '../../../hooks';

export function SignInScreen() {
  const { signInWithGoogle } = useFirebaseAuth();

  return (
    <Container>
      <Wrapper>
        <SocialButton icon={{ name: 'Googleauth' }} onPress={signInWithGoogle} />

        <Separator padding={32} />
      </Wrapper>
    </Container>
  );
}

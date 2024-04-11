import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { Container, Wrapper } from './styles';
import { useFirebaseAuth } from '../../../hooks';

export function HomeScreen() {
  const { signOut } = useFirebaseAuth();

  return (
    <Container>
      <Wrapper>
        <Text>Home</Text>
        <TouchableOpacity onPress={signOut}>Log Out</TouchableOpacity>
      </Wrapper>
    </Container>
  );
}

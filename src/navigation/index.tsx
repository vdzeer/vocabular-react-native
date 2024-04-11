import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { useFirebaseAuth } from '../hooks';
import { AuthRouter } from './AuthRouter';
import { RootRouter } from './RootRouter';

export function Application() {
  const { subscribe } = useFirebaseAuth();

  const [user, setUser] = useState<{
    name: string | null
    email: string | null
  } | null>(null);

  const changeUser = (newUser: FirebaseAuthTypes.User | null) => {
    if (newUser == null) setUser(null);
    else {
      firestore()
        .collection('users')
        .doc(auth().currentUser?.uid)
        .get()
        .then((currentUser) => {
          if (!currentUser.data()) {
            setUser({
              name: auth().currentUser?.displayName ?? null,
              email: auth().currentUser?.email ?? null,
            });
          } else {
            setUser({
              name: (currentUser.data()?.displayName as string) ?? null,
              email: (currentUser.data()?.email as string) ?? null,
            });
          }
        });
    }
  };

  useEffect(() => {
    subscribe(changeUser);
  }, [subscribe]);

  return <NavigationContainer>{user ? <RootRouter /> : <AuthRouter />}</NavigationContainer>;
}

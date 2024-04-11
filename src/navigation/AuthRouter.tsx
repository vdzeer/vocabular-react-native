import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreens, TAuthStack } from './types';
import * as Screens from '../screens';

const AuthStackSkeleton = createNativeStackNavigator<TAuthStack>();

export function AuthRouter() {
  return (
    <AuthStackSkeleton.Navigator
      initialRouteName={AuthStackScreens.SignIn}
      screenOptions={{ headerShown: false }}
    >
      <AuthStackSkeleton.Screen name={AuthStackScreens.SignIn} component={Screens.SignInScreen} />
    </AuthStackSkeleton.Navigator>
  );
}

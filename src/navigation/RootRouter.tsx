import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackScreens, TRootStack } from './types';
import * as Screens from '../screens';

const RootStackSkeleton = createNativeStackNavigator<TRootStack>();

export function RootRouter() {
  return (
    <RootStackSkeleton.Navigator
      initialRouteName={RootStackScreens.Home}
      screenOptions={{ headerShown: false }}
    >
      <RootStackSkeleton.Screen name={RootStackScreens.Home} component={Screens.HomeScreen} />
    </RootStackSkeleton.Navigator>
  );
}

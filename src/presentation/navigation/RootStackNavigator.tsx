import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import { HomeScreen } from '../screens/home/HomeScreen';
import { UiComponentsScreen } from '../screens/uiComponents/UiComponentsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'RN Showcase' }}
      />
      <Stack.Screen
        name="UiComponents"
        component={UiComponentsScreen}
        options={{ title: 'UI Components' }}
      />
    </Stack.Navigator>
  );
};

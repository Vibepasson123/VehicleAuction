import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBar from './BottomTabr';
import List from '../screens/List';
import VehicleDetails from '../screens/VehicleDetails';


export type RootStackParamList = {
  Home: undefined;
  VehicleList: undefined;
  VehicleDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomTabBar} options={{ headerShown: false }} />
      <Stack.Screen name="VehicleList" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;

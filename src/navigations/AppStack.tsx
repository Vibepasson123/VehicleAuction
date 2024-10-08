import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabBar from './BottomTabr';
import VehicleDetails from '../screens/VehicleDetails';
import ListView from '../screens/ListView';

export interface Vehicle {
  id: number;
  make: string;
  model: string;
  engineSize: string;
  fuel: string;
  year: number;
  mileage: number;
  auctionDateTime: string;
  startingBid: number;
  favourite: boolean;
}


export type RootStackParamList = {
  Home: undefined;
  VehicleSearchList: undefined;
  VehicleDetails: { vehicle: Vehicle };
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
      <Stack.Screen name="VehicleSearchList" component={ListView} options={{ headerShown: false }} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;

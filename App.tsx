/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';


LogBox.ignoreAllLogs();
const App: React.FC = () => {
  return (


    <NavigationContainer>
      <AppStack />
    </NavigationContainer>


  );

};


export default App;

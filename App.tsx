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
import SplashScreen from './src/screens/SplashScreen';
LogBox.ignoreAllLogs();


const App: React.FC = () => {
  const [showApp, setShowApp] = React.useState<boolean>(false);
  setTimeout(() => setShowApp(true), 4000);
  if (!showApp) {
    return <SplashScreen />;
  } else {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
};


export default App;

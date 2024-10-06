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
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
LogBox.ignoreAllLogs();


const App: React.FC = () => {
  const [showApp, setShowApp] = React.useState<boolean>(false);
  const RootStyle = { flex: 1 };
  setTimeout(() => setShowApp(true), 4000);
  if (!showApp) {
    return <SplashScreen />;
  } else {
    return (
      <GestureHandlerRootView style={RootStyle}>
        <BottomSheetModalProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    );
  }
};


export default App;

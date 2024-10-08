/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/navigations/AppStack';
import { Provider } from 'react-redux';
import SplashScreen from './src/screens/SplashScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from './src/redux/store';
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
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator size="large" color="#000" />} persistor={persistedStore}>
            <BottomSheetModalProvider>
              <NavigationContainer>
                <AppStack />
              </NavigationContainer>
            </BottomSheetModalProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    );
  }
};


export default App;

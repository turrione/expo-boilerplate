import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigation from './src/components/navigation/AppNavigation';
import store, { persistor } from './src/redux/store';

export default function App() {
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        Headings: require('./src/assets/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf'),
        Cta: require('./src/assets/fonts/Oswald/Oswald-Bold.ttf'),
        Body: require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
      });
    } catch (error) {
      console.log(error);
    } finally {
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

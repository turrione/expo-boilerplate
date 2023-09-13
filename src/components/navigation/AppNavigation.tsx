import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

import MainStack from './DrawerNavigation';
import { setTheme } from '../../redux/actions/preferences.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const AppNavigation = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.preferences.isDarkMode);

  const theme = React.useMemo(() => {
    return isDarkMode ? MD3DarkTheme : MD3LightTheme;
  }, [isDarkMode]);

  useEffect(() => {
    const restorePrefs = () => {
      dispatch(setTheme(isDarkMode));
    };

    restorePrefs();
  }, [dispatch, isDarkMode]);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigation;

import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import * as React from 'react';

import DrawerItems from './DrawerItems';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

declare const global: any;
global.__reanimatedWorkletInit = () => {};

function DrawerContent(props: any): React.JSX.Element {
  return <DrawerItems navigation={props.navigation} />;
}

const DrawerMenu = createDrawerNavigator();

function AppNav() {
  return (
    <DrawerMenu.Navigator
      initialRouteName="Home"
      drawerContent={(props: DrawerContentComponentProps) => (
        <DrawerContent {...props} />
      )}>
      <DrawerMenu.Screen
        name="Home"
        component={HomeScreen as any}
        options={{ headerShown: false }}
      />
      <DrawerMenu.Screen
        name="Settings"
        component={SettingsScreen as any}
        options={{ headerShown: false }}
      />
    </DrawerMenu.Navigator>
  );
}

export default function MainStack() {
  return <AppNav />;
}

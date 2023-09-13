// Menus
const DrawerComponent = {
  Home: 'drawer-component-home',
  Settings: 'drawer-component-settings',
  exampleItems: 'drawer-component-example-items',
  preferences: 'drawer-component-preferences',
  darkTheme: 'drawer-component-dark-theme',
} as any;

// Screens
const HomeScreen = {
  Title: 'home-screen-title',
  Subtitle: 'home-screen-subtitle',
  Button: 'home-screen-button',
} as any;

const SettingsScreen = {
  Title: 'settings-screen-title',
  Subtitle: 'settings-screen-subtitle',
  Button: 'settings-screen-button',
} as any;

export default {
  menus: {
    drawer: DrawerComponent,
  },
  screens: {
    home: HomeScreen,
    settings: SettingsScreen,
  },
};

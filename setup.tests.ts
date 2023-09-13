jest.useFakeTimers();

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('redux-persist-expo-filesystem', () => {});

jest.mock('i18n-js', () => {
  return jest.requireActual('i18n-js/dist/require/index');
});

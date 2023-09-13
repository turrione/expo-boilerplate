import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import thunk, { ThunkAction } from 'redux-thunk';

import getStoredStateAsync from './getStoredState';
import preferencesReducer, {
  PreferencesState,
} from './reducers/preferences.reducer';

// Define the type for your root state here
export type RootState = {
  preferences: PreferencesState;
  // Other reducers
};

const persistConfig: PersistConfig<any, any, any, any> = {
  key: 'root',
  storage: Platform.OS === 'android' ? ExpoFileSystemStorage : AsyncStorage,
  blacklist: [], // Add your reducers (keys as string) that you do not want to persist here
  // Other options
};

if (__DEV__ && Platform.OS === 'android') {
  // Override getStoredState with getStoredStateAsync in development mode on Android
  persistConfig.getStoredState = getStoredStateAsync;
}

if (__DEV__) {
  // Log the storage type being used in development mode
  console.log(
    Platform.OS === 'android'
      ? 'Using ExpoFileSystemStorage'
      : 'Using AsyncStorage',
  );
}

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  preferences: preferencesReducer,
  // Other reducers
});

// Create a persisted reducer with the persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk], // Add any middleware you need
  devTools: process.env.NODE_ENV !== 'production', // Enable dev tools in non-production environments
});

export const persistor = persistStore(store);

// Define the types for the Redux store
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
) => useSelector(selector);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store; // Export the Redux store

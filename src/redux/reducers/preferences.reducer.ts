import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import i18n from '../../translations/i18n';
import { setLanguage, setTheme } from '../actions/preferences.actions';
export interface PreferencesState {
  isDarkMode: boolean;
  language: string;
}

const initialState: PreferencesState = {
  isDarkMode: false,
  language: i18n.defaultLocale,
};

const preferencesReducer = createReducer(initialState, builder => {
  builder
    .addCase(setTheme, (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    })
    .addCase(setLanguage, (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    });
});

export default preferencesReducer;

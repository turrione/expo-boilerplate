import { createAction } from '@reduxjs/toolkit';

import { PREFERENCES_SET_LANGUAGE, PREFERENCES_SET_THEME } from '../types';

export const setTheme = createAction<boolean>(PREFERENCES_SET_THEME);

export const setLanguage = createAction<string>(PREFERENCES_SET_LANGUAGE);

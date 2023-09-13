import { StyleSheet, View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';

import { setLanguage } from '../../redux/actions/preferences.actions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const LanguageSelection = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(state => state.preferences.language);

  const toggleLanguage = () => {
    // Cambia el idioma al alternar entre español e inglés
    const newLanguage = currentLanguage === 'es-ES' ? 'en-US' : 'es-ES';
    dispatch(setLanguage(newLanguage));
  };

  return (
    <TouchableRipple onPress={toggleLanguage}>
      <View style={[styles.preference, styles.v3Preference]}>
        <Text variant="labelLarge">
          {currentLanguage === 'es-ES' ? 'Español' : 'English'}
        </Text>
        <View style={styles.langContainer} pointerEvents="none">
          <Text style={styles.langText}>
            {currentLanguage === 'es-ES' ? 'ES' : 'EN'}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  v3Preference: {
    height: 56,
    paddingHorizontal: 28,
  },
  langContainer: {
    fontSize: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  langText: {
    fontSize: 18,
  },
});

export default LanguageSelection;

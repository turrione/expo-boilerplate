import { NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import ScreenWrapper from './ScreenWrapper';
import { useTranslations } from '../../hooks/useTranslations';
import i18nKeys from '../../translations/i18nKeys';

type SettingsScreenProps = {
  navigation: NavigationProp<any, any>;
};

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const { t } = useTranslations();
  return (
    <ScreenWrapper
      contentContainerStyle={styles.content}
      navigation={navigation}
      title={t(i18nKeys.screens.settings.Title)}
      back={false}>
      <Text>{t(i18nKeys.screens.settings.Title)}</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 8,
  },
  first: {
    flex: 2,
  },
});

export default SettingsScreen;

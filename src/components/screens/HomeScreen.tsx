import { NavigationProp } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import ScreenWrapper from './ScreenWrapper';
import { useTranslations } from '../../hooks/useTranslations';
import i18nKeys from '../../translations/i18nKeys';
import { fonts } from '../../utils/theme';

type HomeScreenProps = {
  navigation: NavigationProp<any, any>;
};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { t } = useTranslations();

  return (
    <ScreenWrapper
      contentContainerStyle={styles.content}
      navigation={navigation}
      title={t(i18nKeys.screens.home.Title)}
      back={false}>
      <Text style={[styles.title]}>{t(i18nKeys.screens.home.Title)}</Text>
      <Text style={[styles.body]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam et
        quidem, quibusdam ab perferendis doloremque earum ipsam expedita
        architecto enim ducimus sed autem natus itaque, iure incidunt. Possimus,
        ipsum tempore!
      </Text>
      <Text style={[styles.cta]}>Lorem ipsum!</Text>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 8,
  },
  title: {
    fontFamily: fonts.Headings,
    fontSize: 24,
  },
  body: {
    fontFamily: fonts.Body,
    fontSize: 16,
  },
  cta: {
    fontFamily: fonts.Cta,
    fontSize: 16,
  },
});

export default HomeScreen;

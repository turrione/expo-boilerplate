import { useAppSelector } from '../redux/store';
import i18n from '../translations/i18n';

export const useTranslations = () => {
  const locale = useAppSelector(state => state.preferences.language);

  const t = (key: string) => {
    return i18n.t(key, { locale });
  };

  return {
    t,
  };
};

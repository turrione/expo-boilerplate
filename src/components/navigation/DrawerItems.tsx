import { DrawerContentScrollView } from '@react-navigation/drawer';
import { NavigationProp } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Badge,
  Drawer,
  MD3Colors,
  MD3Theme,
  Switch,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { useDispatch } from 'react-redux';

import LanguageSelection from './LanguageSelection';
import { useTranslations } from '../../hooks/useTranslations';
import { setTheme } from '../../redux/actions/preferences.actions';
import { useAppSelector } from '../../redux/store';
import i18nKeys from '../../translations/i18nKeys';

const DrawerItemsData = [
  {
    label: 'Home',
    icon: 'home',
    route: 'Home',
    key: 0,
    right: () => <Text variant="labelLarge">44</Text>,
  },
  {
    label: 'Settings',
    icon: 'cog',
    route: 'Settings',
    key: 1,
    right: ({ color }: { color: string }) => (
      <Badge
        visible
        size={8}
        style={[styles.badge, { backgroundColor: color }]}
      />
    ),
  },
];

type DrawerItemsProps = {
  navigation: NavigationProp<any, any>;
};

function DrawerItems({ navigation }: DrawerItemsProps) {
  const [drawerItemIndex, setDrawerItemIndex] = React.useState<number>(0);
  const { isDarkMode } = useAppSelector(state => state.preferences);
  const dispatch = useDispatch();

  const _setDrawerItem = (index: number) => setDrawerItemIndex(index);

  const handlePress = (screenName: string, index: number) => {
    navigation.navigate(screenName);
    _setDrawerItem(index);
  };
  const { colors } = useTheme<MD3Theme>();

  const coloredLabelTheme = {
    colors: {
      secondaryContainer: MD3Colors.tertiary80,
      onSecondaryContainer: MD3Colors.tertiary20,
    },
  };

  const toggleTheme = () => {
    dispatch(setTheme(!isDarkMode));
  };

  const { t } = useTranslations();

  const getDrawerItemLabel = (label: string): string => {
    return t(i18nKeys.menus.drawer[label]);
  };

  return (
    <DrawerContentScrollView
      alwaysBounceVertical={false}
      style={[
        styles.drawerContent,
        {
          backgroundColor: colors.surface,
        },
      ]}>
      <>
        <Drawer.Section title={t(i18nKeys.menus.drawer.exampleItems)}>
          {DrawerItemsData.map((props, index) => (
            <Drawer.Item
              {...props}
              key={props.key}
              label={getDrawerItemLabel(props.label)}
              theme={props.key === 3 ? coloredLabelTheme : undefined}
              active={drawerItemIndex === index}
              onPress={() => handlePress(props.route, index)}
            />
          ))}
        </Drawer.Section>

        <Drawer.Section title={t(i18nKeys.menus.drawer.preferences)}>
          <TouchableRipple onPress={toggleTheme}>
            <View style={[styles.preference, styles.v3Preference]}>
              <Text variant="labelLarge">
                {t(i18nKeys.menus.drawer.darkTheme)}
              </Text>
              <View pointerEvents="none">
                <Switch value={isDarkMode} />
              </View>
            </View>
          </TouchableRipple>
          <LanguageSelection />
        </Drawer.Section>

        <Text variant="bodySmall" style={styles.annotation}>
          {require('../../../package.json').name} v
          {require('../../../package.json').version}
        </Text>
      </>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
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
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  badge: {
    alignSelf: 'center',
  },
  annotation: {
    marginHorizontal: 24,
    marginVertical: 6,
  },
});

export default DrawerItems;

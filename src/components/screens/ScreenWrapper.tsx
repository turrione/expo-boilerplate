import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NavigationProp } from '@react-navigation/native';
import * as React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { Appbar, MD3Theme, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  navigation: NavigationProp<any, any>;
  title: string;
  back?: boolean;
};

export default function ScreenWrapper({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  navigation,
  back,
  title,
  ...rest
}: Props) {
  const theme = useTheme<MD3Theme>();

  const insets = useSafeAreaInsets();

  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.left,
    },
  ];

  return (
    <>
      <Appbar.Header elevated>
        {back ? (
          <Appbar.BackAction onPress={() => navigation.goBack()} />
        ) : (navigation as any).openDrawer ? (
          <Appbar.Action
            icon="menu"
            isLeading
            onPress={() =>
              (navigation as any as DrawerNavigationProp<any>).openDrawer()
            }
          />
        ) : null}
        <Appbar.Content title={title} />
      </Appbar.Header>
      {withScrollView ? (
        <ScrollView
          {...rest}
          contentContainerStyle={contentContainerStyle}
          keyboardShouldPersistTaps="always"
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import {useUnit} from 'effector-react';
import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

import {COMMON_COLORS, LIGHT_THEME_COLORS, DARK_THEME_COLORS} from './colors';
import {FONTS} from './fonts';
import {$theme} from './theme.model';

export const useTheme = () => {
  const theme = useUnit($theme);

  const colors =
    theme === 'light'
      ? {...COMMON_COLORS, ...LIGHT_THEME_COLORS}
      : {...COMMON_COLORS, ...DARK_THEME_COLORS};

  const navigationTheme: Theme = {
    ...(theme === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...(theme === 'dark' ? DarkTheme : DefaultTheme).colors,
      background: colors.background,
      text: colors.text,
    },
  };

  return {
    mode: theme,
    colors,
    fonts: FONTS,
    navigationTheme,
  };
};

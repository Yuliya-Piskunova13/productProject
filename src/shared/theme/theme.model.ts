import {createStore, createEvent} from 'effector';
import {Appearance} from 'react-native';

export type Theme = 'light' | 'dark';

export const setTheme = createEvent<Theme>();

const getSystemTheme = (): Theme =>
  Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

export const $theme = createStore<Theme>(getSystemTheme()).on(
  setTheme,
  (_, theme) => theme,
);

Appearance.addChangeListener(({colorScheme}) => {
  const newTheme: Theme = colorScheme === 'dark' ? 'dark' : 'light';
  setTheme(newTheme);
});

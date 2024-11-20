import React, {ReactNode} from 'react';
import {Text as TextRN, StyleSheet, TextStyle} from 'react-native';
import {useTheme} from '../../theme/useTheme';
import styles from './styles';

type TextProps = {
  styleKey?: keyof ReturnType<typeof useTheme>['fonts'];
  color?: keyof ReturnType<typeof useTheme>['colors'];
  children: ReactNode;
  style?: TextStyle | TextStyle[];
};

export const Text = ({styleKey, color, children, style}: TextProps) => {
  const {fonts, colors} = useTheme();

  return (
    <TextRN
      style={[
        styles.text,
        fonts[styleKey || 'bodyMRegular'],
        {color: colors[color || 'text']},
        style,
      ]}>
      {children}
    </TextRN>
  );
};

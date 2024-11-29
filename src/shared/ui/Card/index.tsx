import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

import {useTheme} from '../../theme/useTheme';
import styles from './styles';

type CardProps = {
  children: ReactNode;
  style?: ViewStyle;
};

export const Card = ({children, style}: CardProps) => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.gray05,
          shadowColor: colors.black00,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

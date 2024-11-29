import React from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/useTheme';
import styles from './styles';

type LoaderProps = {
  style?: ViewStyle;
};

export const Loader = ({style}: LoaderProps) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView style={[styles.container, style]}>
      <ActivityIndicator color={colors.black00} />
    </SafeAreaView>
  );
};

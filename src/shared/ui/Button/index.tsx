import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Text} from '../Text';
import styles from './styles';
import {useTheme} from '../../theme/useTheme';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
};

export const Button = ({title, onPress, style}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.gray70}, style]}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

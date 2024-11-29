import React from 'react';
import {View} from 'react-native';

type SpaceProps = {
  size?: keyof typeof sizes;
};

enum sizes {
  small = 4,
  medium = 8,
  large = 16,
  xlarge = 32,
}

export const Space = ({size = 'medium'}: SpaceProps) => {
  const space = sizes[size] || 8;
  return <View style={{height: space}} />;
};

import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../foundation/theme';
import { space8 } from '../foundation/dimensions';

interface CircularProgressProps {
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size = space8,
  style,
}) => {
  const theme = useAppTheme();

  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.primary}
      style={style}
    />
  );
};

import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../foundation/theme';
import { space6, space } from '../foundation/dimensions';


interface CircularProgressProps {
  size:  'small' | 'large' | number;
  style?: StyleProp<ViewStyle>;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 'large',
  style,
}) => {
  const theme = useAppTheme();

  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.primary}
      style={{}}
    />
  );
};


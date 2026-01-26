import React from 'react';
import { Switch } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../foundation/theme';

interface AppSwitchProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const AppSwitch: React.FC<AppSwitchProps> = ({
  value,
  onValueChange,
  style,
  disabled = false,
}) => {
  const theme = useAppTheme();

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      style={style}
      color={theme.colors.primary}
    />
  );
};

import React from 'react';
import { Checkbox } from 'react-native-paper';
import { useAppTheme } from '../foundation/theme';

interface AppCheckboxProps {
  checked: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

export const AppCheckbox: React.FC<AppCheckboxProps> = ({
  checked = false,
  onPress,
  disabled = false,
}) => {
  const theme = useAppTheme();

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={onPress}
      disabled={disabled}
      color={theme.colors.primary}
      uncheckedColor={theme.colors.neutral80}
    />
  );
};

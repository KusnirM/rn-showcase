import React from 'react';
import { Button } from 'react-native-paper';
import { useAppTheme } from '../../foundation/theme';

interface AppTextButtonProps {
  text: string;
  onPress: () => void;
}

export const AppTextButton: React.FC<AppTextButtonProps> = ({
  text,
  onPress,
}): React.JSX.Element => (
  <Button
    mode="text"
    onPress={onPress}
    textColor={useAppTheme().colors.primary}
  >
    {text.toUpperCase()}
  </Button>
);

export const AppTextButtonError: React.FC<AppTextButtonProps> = ({
  text,
  onPress,
}): React.JSX.Element => (
  <Button
    mode="text"
    onPress={onPress}
    textColor={useAppTheme().colors.error}
  >
    {text.toUpperCase()}
  </Button>
);

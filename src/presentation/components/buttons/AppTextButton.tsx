import React from 'react';
import { Button } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../../foundation/theme';

interface AppTextButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const AppTextButton: React.FC<AppTextButtonProps> = ({
  text,
  onPress,
  style,
}) => {
  const theme = useAppTheme();

  return (
    <Button
      mode="text"
      onPress={onPress}
      style={style}
      textColor={theme.colors.primary}
    >
      {text.toUpperCase()}
    </Button>
  );
};

export const AppTextButtonError: React.FC<AppTextButtonProps> = ({
  text,
  onPress,
  style,
}) => {
  const theme = useAppTheme();

  return (
    <Button
      mode="text"
      onPress={onPress}
      style={style}
      textColor={theme.colors.error}
    >
      {text.toUpperCase()}
    </Button>
  );
};

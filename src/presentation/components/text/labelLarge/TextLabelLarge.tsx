import React from 'react';
import { Text } from 'react-native-paper';
import { StyleProp, TextStyle } from 'react-native';
import { useAppTheme } from '../../../foundation/theme';

interface TextLabelLargeProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  uppercase?: boolean;
}

export const TextLabelLarge: React.FC<TextLabelLargeProps> = ({
  children,
  style,
  uppercase = false,
}) => {
  const content = uppercase && typeof children === 'string' ? children.toUpperCase() : children;
  return (
    <Text variant="labelLarge" style={style}>
      {content}
    </Text>
  );
};

export const TextButtonPrimary: React.FC<TextLabelLargeProps> = ({
  children,
  style,
}) => {
  const theme = useAppTheme();
  const content = typeof children === 'string' ? children.toUpperCase() : children;
  return (
    <Text variant="labelLarge" style={[{ color: theme.colors.primary }, style]}>
      {content}
    </Text>
  );
};

export const TextButtonNeutral0: React.FC<TextLabelLargeProps> = ({
  children,
  style,
}) => {
  const theme = useAppTheme();
  const content = typeof children === 'string' ? children.toUpperCase() : children;
  return (
    <Text variant="labelLarge" style={[{ color: theme.colors.neutral0 }, style]}>
      {content}
    </Text>
  );
};

export const TextButtonError: React.FC<TextLabelLargeProps> = ({
  children,
  style,
}) => {
  const theme = useAppTheme();
  const content = typeof children === 'string' ? children.toUpperCase() : children;
  return (
    <Text variant="labelLarge" style={[{ color: theme.colors.error }, style]}>
      {content}
    </Text>
  );
};

import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelLarge: React.FC<TextBaseProps> = ({ children, color }) => (
  <Text variant="labelLarge" style={{ color }}>{children}</Text>
);

export const TextButtonPrimary: TextVariantProps = ({ children }) => (
  <TextLabelLarge color={useAppColors().primary}>{children}</TextLabelLarge>
);

export const TextButtonNeutral0: TextVariantProps = ({ children }) => (
  <TextLabelLarge color={useAppColors().neutral0}>{children}</TextLabelLarge>
);

export const TextButtonError: TextVariantProps = ({ children }) => (
  <TextLabelLarge color={useAppColors().error}>{children}</TextLabelLarge>
);

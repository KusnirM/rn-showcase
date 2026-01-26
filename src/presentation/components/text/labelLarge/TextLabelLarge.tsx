import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelLarge = ({ children, color }: TextBaseProps) => (
  <Text variant="labelLarge" style={{ color }}>{children}</Text>
);

export const TextButtonPrimary = ({ children }: TextVariantProps) => (
  <TextLabelLarge color={useAppColors().primary}>{children}</TextLabelLarge>
);

export const TextButtonNeutral0 = ({ children }: TextVariantProps) => (
  <TextLabelLarge color={useAppColors().neutral0}>{children}</TextLabelLarge>
);

export const TextButtonError = ({ children }: TextVariantProps) => (
  <TextLabelLarge color={useAppColors().error}>{children}</TextLabelLarge>
);

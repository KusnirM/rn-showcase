import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelMedium: React.FC<TextBaseProps> = ({ children, color }) => (
  <Text variant="labelMedium" style={{ color }}>{children}</Text>
);
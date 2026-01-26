import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelMedium: React.FC<TextBaseProps> = ({ text, color }) => (
  <Text variant="labelMedium" style={{ color }}>{text}</Text>
) ;
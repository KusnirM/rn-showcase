import React from 'react';
import { Text } from 'react-native-paper';
import { TextBaseProps } from '../TextProps';

export const TextLabelMedium = ({ children, color }: TextBaseProps) => (
  <Text variant="labelMedium" style={{ color }}>{children}</Text>
);
import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextHeadlineMedium: React.FC<TextBaseProps> = ({ children, color }) => (
  <Text variant="headlineMedium" style={{ color }}>{children}</Text>
);

export const TextHeadlineMediumPrimary: TextVariantProps = ({ children }) => (
  <TextHeadlineMedium color={useAppColors().primary}>{children}</TextHeadlineMedium>
);

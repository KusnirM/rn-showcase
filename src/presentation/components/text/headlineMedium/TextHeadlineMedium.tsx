import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../types';

export const TextHeadlineMedium: React.FC<TextBaseProps> = ({ text, color }) => (
  <Text variant="headlineMedium" style={{ color }}>{text}</Text>
);

export const TextHeadlineMediumPrimary: TextVariantProps = ({ text }) => (
  <TextHeadlineMedium text={text} color={useAppColors().primary} />
);

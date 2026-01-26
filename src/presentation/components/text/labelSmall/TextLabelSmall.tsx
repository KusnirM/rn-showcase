import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelSmall: React.FC<TextBaseProps> = ({text, color}) => (
  <Text variant="labelSmall" style={{color}}>{text}</Text>
);

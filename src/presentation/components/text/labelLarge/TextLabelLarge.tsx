import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextLabelLarge: React.FC<TextBaseProps> = ({ text, color }) => (
  <Text variant="labelLarge" style={{ color }}>{text}</Text>
);

export const TextButtonPrimary: TextVariantProps = ({ text }) => (
  <TextLabelLarge text={text} color={useAppColors().primary} />
);

export const TextButtonNeutral0: TextVariantProps = ({ text }) => (
  <TextLabelLarge text={text} color={useAppColors().neutral0} />
);

export const TextButtonError: TextVariantProps = ({ text }) => (
  <TextLabelLarge text={text} color={useAppColors().error} />
);

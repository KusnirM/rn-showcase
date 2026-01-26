import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextTitleLarge = ({children, color}: TextBaseProps) => (
  <Text variant="titleLarge" style={{color}}>{children}</Text>
);

export const TextTitleLargeNeutral80 = ({children}: TextVariantProps) => (
  <TextTitleLarge color={useAppColors().neutral80}>{children}</TextTitleLarge>
);

export const TextTitleLargePrimary = ({children}: TextVariantProps) => (
  <TextTitleLarge color={useAppColors().primary}>{children}</TextTitleLarge>
);

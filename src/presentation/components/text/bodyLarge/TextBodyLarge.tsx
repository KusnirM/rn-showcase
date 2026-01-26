import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodyLarge = ({children, color}: TextBaseProps) => (
  <Text variant="bodyLarge" style={{color}}>{children}</Text>
);

export const TextBodyLargeNeutral100 = ({children}: TextVariantProps) => (
  <TextBodyLarge color={useAppColors().neutral100}>{children}</TextBodyLarge>
);

export const TextBodyLargeNeutral80 = ({children}: TextVariantProps) => (
  <TextBodyLarge color={useAppColors().neutral80}>{children}</TextBodyLarge>
);

export const TextBodyLargePrimary = ({children}: TextVariantProps) => (
  <TextBodyLarge color={useAppColors().primary}>{children}</TextBodyLarge>
);

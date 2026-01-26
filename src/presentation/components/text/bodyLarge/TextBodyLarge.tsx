import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodyLarge: React.FC<TextBaseProps> = ({children, color}) => (
  <Text variant="bodyLarge" style={{color}}>{children}</Text>
);

export const TextBodyLargeNeutral100: TextVariantProps = ({children}) => (
  <TextBodyLarge color={useAppColors().neutral100}>{children}</TextBodyLarge>
);

export const TextBodyLargeNeutral80: TextVariantProps = ({children}) => (
  <TextBodyLarge color={useAppColors().neutral80}>{children}</TextBodyLarge>
);

export const TextBodyLargePrimary: TextVariantProps = ({children}) => (
  <TextBodyLarge color={useAppColors().primary}>{children}</TextBodyLarge>
);

import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextTitleLarge: React.FC<TextBaseProps> = ({children, color}) => (
  <Text variant="titleLarge" style={{color}}>{children}</Text>
);

export const TextTitleLargeNeutral80: TextVariantProps = ({children}) => (
  <TextTitleLarge color={useAppColors().neutral80}>{children}</TextTitleLarge>
);

export const TextTitleLargePrimary: TextVariantProps = ({children}) => (
  <TextTitleLarge color={useAppColors().primary}>{children}</TextTitleLarge>
);

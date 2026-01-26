import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodyMedium: React.FC<TextBaseProps> = ({children, color, numberOfLines}) => (
  <Text variant="bodyMedium" style={{color}} numberOfLines={numberOfLines}>{children}</Text>
);

export const TextBodyMediumNeutral100: TextVariantProps = ({children, numberOfLines}) => (
  <TextBodyMedium color={useAppColors().neutral100} numberOfLines={numberOfLines}>{children}</TextBodyMedium>
);

export const TextBodyMediumNeutral80: TextVariantProps = ({children, numberOfLines}) => (
  <TextBodyMedium color={useAppColors().neutral80} numberOfLines={numberOfLines}>{children}</TextBodyMedium>
);

import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodySmall: React.FC<TextBaseProps> = ({children, color}) => (
  <Text variant="bodySmall" style={{color}}>{children}</Text>
);

export const TextBodySmallNeutral80: TextVariantProps = ({children}) => (
  <TextBodySmall color={useAppColors().neutral80}>{children}</TextBodySmall>
);

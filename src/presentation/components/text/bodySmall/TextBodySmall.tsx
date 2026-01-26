import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodySmall: React.FC<TextBaseProps> = ({text, color}) => (
  <Text variant="bodySmall" style={{color}}>{text}</Text>
);

export const TextBodySmallNeutral80: TextVariantProps = ({text}) => (
  <TextBodySmall text={text} color={useAppColors().neutral80} />
);

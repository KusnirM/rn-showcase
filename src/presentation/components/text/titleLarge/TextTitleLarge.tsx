import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../types';

export const TextTitleLarge: React.FC<TextBaseProps> = ({text, color}) => (
  <Text variant="titleLarge" style={{color}}>{text}</Text>
);

export const TextTitleLargeNeutral80: TextVariantProps = ({text}) => (
  <TextTitleLarge text={text} color={useAppColors().neutral80} />
);

export const TextTitleLargePrimary: TextVariantProps = ({text}) => (
  <TextTitleLarge text={text} color={useAppColors().primary} />
);

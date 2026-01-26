import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../types';

export const TextBodyLarge: React.FC<TextBaseProps> = ({text, color}) => (
  <Text variant="bodyLarge" style={{color}}>{text}</Text>
);

export const TextBodyLargeNeutral100: TextVariantProps = ({text}) => (
  <TextBodyLarge text={text} color={useAppColors().neutral100} />
);

export const TextBodyLargeNeutral80: TextVariantProps = ({text}) => (
  <TextBodyLarge text={text} color={useAppColors().neutral80} />
);

export const TextBodyLargePrimary: TextVariantProps = ({text}) => (
  <TextBodyLarge text={text} color={useAppColors().primary} />
);

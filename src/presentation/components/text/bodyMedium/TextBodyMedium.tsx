import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';
import { TextBaseProps, TextVariantProps } from '../TextProps';

export const TextBodyMedium: React.FC<TextBaseProps> = ({text, color, numberOfLines}) => (
  <Text variant="bodyMedium" style={{color}} numberOfLines={numberOfLines}>{text}</Text>
);

export const TextBodyMediumNeutral100: TextVariantProps = ({text, numberOfLines}) => (
  <TextBodyMedium text={text} color={useAppColors().neutral100} numberOfLines={numberOfLines} />
);

export const TextBodyMediumNeutral80: TextVariantProps = ({text, numberOfLines}) => (
  <TextBodyMedium text={text} color={useAppColors().neutral80} numberOfLines={numberOfLines} />
);

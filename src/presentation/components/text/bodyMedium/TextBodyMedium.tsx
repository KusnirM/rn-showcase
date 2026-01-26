import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextBodyMediumProps {
  text: string;
  color: string;
  numberOfLines?: number;
}

export const TextBodyMedium: React.FC<TextBodyMediumProps> = ({
  text,
  color,
  numberOfLines,
}) => {
  return (
    <Text variant="bodyMedium" style={{ color }} numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextBodyMediumNeutral100: React.FC<Omit<TextBodyMediumProps, 'color'>> = ({
  text,
  numberOfLines,
}) => {
  return (
    <TextBodyMedium text={text} color={useAppColors().neutral100} numberOfLines={numberOfLines} />
  );
};

export const TextBodyMediumNeutral80: React.FC<Omit<TextBodyMediumProps, 'color'>> = ({
  text,
  numberOfLines,
}) => {
  return (
    <TextBodyMedium text={text} color={useAppColors().neutral80} numberOfLines={numberOfLines} />
  );
};

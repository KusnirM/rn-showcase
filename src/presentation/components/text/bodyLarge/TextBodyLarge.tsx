import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextBodyLargeProps {
  text: string;
  color: string;
}

export const TextBodyLarge: React.FC<TextBodyLargeProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="bodyLarge" style={{ color }}>
      {text}
    </Text>
  );
};

export const TextBodyLargeNeutral100: React.FC<Omit<TextBodyLargeProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextBodyLarge text={text} color={useAppColors().neutral100} />
  );
};

export const TextBodyLargeNeutral80: React.FC<Omit<TextBodyLargeProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextBodyLarge text={text} color={useAppColors().neutral80} />
  );
};

export const TextBodyLargePrimary: React.FC<Omit<TextBodyLargeProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextBodyLarge text={text} color={useAppColors().primary} />
  );
};

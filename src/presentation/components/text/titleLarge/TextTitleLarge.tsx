import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextTitleLargeProps {
  text: string;
  color: string;
}

export const TextTitleLarge: React.FC<TextTitleLargeProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="titleLarge" style={{ color }}>
      {text}
    </Text>
  );
};

export const TextTitleLargeNeutral80: React.FC<Omit<TextTitleLargeProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextTitleLarge text={text} color={useAppColors().neutral80} />
  );
};

export const TextTitleLargePrimary: React.FC<Omit<TextTitleLargeProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextTitleLarge text={text} color={useAppColors().primary} />
  );
};

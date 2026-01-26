import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextBodySmallProps {
  text: string;
  color: string;
}

export const TextBodySmall: React.FC<TextBodySmallProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="bodySmall" style={{ color }}>
      {text}
    </Text>
  );
};

export const TextBodySmallNeutral80: React.FC<Omit<TextBodySmallProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextBodySmall text={text} color={useAppColors().neutral80} />
  );
};

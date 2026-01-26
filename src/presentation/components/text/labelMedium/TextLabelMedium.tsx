import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextLabelMediumProps {
  text: string;
  color: string;
}

export const TextLabelMedium: React.FC<TextLabelMediumProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="labelMedium" style={{ color }}>
      {text}
    </Text>
  );
};

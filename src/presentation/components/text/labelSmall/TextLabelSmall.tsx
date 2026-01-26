import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextLabelSmallProps {
  text: string;
  color: string;
}

export const TextLabelSmall: React.FC<TextLabelSmallProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="labelSmall" style={{ color }}>
      {text}
    </Text>
  );
};

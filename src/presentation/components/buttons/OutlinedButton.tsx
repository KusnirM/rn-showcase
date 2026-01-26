import React from 'react';
import { Button } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../../foundation/theme';
import { space4, cardCornerRadius6 } from '../../foundation/dimensions';

interface OutlinedButtonProps {
  text: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  text,
  onPress,
  style,
}) => {
  const theme = useAppTheme();

  return (
    <Button
      mode="outlined"
      onPress={onPress}
      style={style}
      contentStyle={{ paddingVertical: space4 }}
      textColor={theme.colors.primary}
      theme={{ roundness: cardCornerRadius6 }}
    >
      {text.toUpperCase()}
    </Button>
  );
};

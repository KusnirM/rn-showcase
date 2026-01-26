import React from 'react';
import { Card } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../../foundation/theme';
import { cardElevation } from '../../foundation/dimensions';

interface AppCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AppCard: React.FC<AppCardProps> = ({ children, style }) => {
  const theme = useAppTheme();

  return (
    <Card
      mode="contained"
      style={[{ backgroundColor: theme.colors.surface }, style]}
    >
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};

interface AppElevatedCardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const AppElevatedCard: React.FC<AppElevatedCardProps> = ({
  children,
  style,
  onPress,
}) => {
  const theme = useAppTheme();

  return (
    <Card
      mode="elevated"
      elevation={cardElevation}
      style={[{ backgroundColor: theme.colors.surface }, style]}
      onPress={onPress}
    >
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};

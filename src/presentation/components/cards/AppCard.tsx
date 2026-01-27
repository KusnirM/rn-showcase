import React from 'react';
import { Card } from 'react-native-paper';
import { useAppTheme } from '../../foundation/theme';

interface AppCardProps {
  children: React.ReactNode;
  elevated?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ children, elevated = true }): React.JSX.Element => {
  const theme = useAppTheme();
  return (
    <Card mode="elevated" elevation={elevated ? 1 : 0} style={{ backgroundColor: theme.colors.surface }}>
      <Card.Content>{children}</Card.Content>
    </Card>
  );
};



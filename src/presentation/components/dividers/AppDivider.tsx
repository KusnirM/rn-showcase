import React from 'react';
import { Divider } from 'react-native-paper';
import { StyleProp, ViewStyle } from 'react-native';
import { useAppTheme } from '../../foundation/theme';

interface AppDividerProps {
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const AppDivider: React.FC<AppDividerProps> = ({ color, style }) => <Divider style={[{ backgroundColor: color }, style]} />;

export const AppDividerPrimary: React.FC<{ style?: StyleProp<ViewStyle> }> = ({ style }) => <AppDivider color={useAppTheme().colors.primary} style={style} />;

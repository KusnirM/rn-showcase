import React from 'react';

/**
 * Base props for text components that require color.
 * Optional props can be implemented by specific components as needed.
 */
export interface TextBaseProps {
  children: string;
  color: string;
  numberOfLines?: number;
}

/**
 * Generic type for text component variant props.
 * Variants omit the 'color' prop and use theme colors instead.
 */
export type TextVariantProps = React.FC<Omit<TextBaseProps, 'color'>>;

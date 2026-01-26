import React from 'react';
import { Text } from 'react-native-paper';
import { useAppColors } from '../../../foundation/theme';

interface TextHeadlineMediumProps {
  text: string;
  color: string;
}

export const TextHeadlineMedium: React.FC<TextHeadlineMediumProps> = ({
  text,
  color,
}) => {
  return (
    <Text variant="headlineMedium" style={{ color }}>
      {text}
    </Text>
  );
};

export const TextHeadlineMediumPrimary: React.FC<Omit<TextHeadlineMediumProps, 'color'>> = ({
  text,
}) => {
  return (
    <TextHeadlineMedium text={text} color={useAppColors().primary} />
  );
};


// @Composable
// fun TextBodyLarge(
//     text: String,
//     color: Color,
//     modifier: Modifier = Modifier,
//     fontWeight: FontWeight = FontWeight.Normal,
//     textAlign: TextAlign? = null,
// ) {
//     Text(
//         text = text,
//         style = MaterialTheme.typography.bodyLarge,
//         color = { color },
//         fontWeight = fontWeight,
//         modifier = modifier,
//         textAlign = textAlign
//     )
// }

// @Composable
// fun TextBodyLargeNeutral100(
//     text: String,
//     modifier: Modifier = Modifier,
//     fontWeight: FontWeight = FontWeight.Normal,
//     textAlign: TextAlign? = null,
// ) {
//     TextBodyLarge(
//         text = text,
//         color = MaterialTheme.appColorScheme.neutral100,
//         modifier = modifier,
//         fontWeight = fontWeight,
//         textAlign = textAlign
//     )
// }


import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  TextBodyLarge,
  TextBodyLargeNeutral100,
  TextBodyLargePrimary,
  TextBodyMedium,
  TextBodyMediumNeutral100,
  TextBodyMediumNeutral80,
  TextBodySmall,
  TextBodySmallNeutral80,
  TextHeadlineMedium,
  TextHeadlineMediumPrimary,
  TextLabelLarge,
  TextLabelLargePrimary,
  TextLabelLargeNeutral0,
  TextLabelLargeError,
  TextLabelMedium,
  TextLabelSmall,
  TextTitleLarge,
  TextTitleLargeNeutral80,
  TextTitleLargePrimary,
  ContainedButton,
  OutlinedButton,
  AppTextButton,
  AppTextButtonError,
  AppFloatingActionButton,
  AppCard,
  AppTextField,
  AppCheckbox,
  AppSwitch,
  ColumnSpacer2,
  ColumnSpacer4,
  ColumnSpacer6,
  AppDividerPrimary,
  CircularProgress,
  ErrorView,
  TextLabelMediumNeutral80,
  ColumnSpacer12,
} from '../presentation/components';
import { space4 } from '../presentation/foundation/dimensions';
import { lightTheme, useAppColors } from '../presentation/foundation';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={lightTheme}>
      <TestScreen />
    </PaperProvider>
  );
}

const TestScreen = () => {
  const colors = useAppColors();
  const [textValue, setTextValue] = useState('value');
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TextHeadlineMediumPrimary>aaa</TextHeadlineMediumPrimary>

      <View style={styles.section}>
        <TextTitleLargePrimary>Text Components</TextTitleLargePrimary>
        <ColumnSpacer2 />
        <TextHeadlineMediumPrimary>Headline Medium Primary</TextHeadlineMediumPrimary>
        <ColumnSpacer2 />
        <TextTitleLargeNeutral80>Title Large Neutral 80</TextTitleLargeNeutral80>
        <ColumnSpacer2 />
        <TextBodyLargeNeutral100>Body Large Neutral 100</TextBodyLargeNeutral100>


        <ColumnSpacer2 />
        <TextBodyMediumNeutral100>Body Medium Neutral 100</TextBodyMediumNeutral100>
        <ColumnSpacer2 />
        <TextBodySmallNeutral80>Body Small Neutral 80</TextBodySmallNeutral80>
        <ColumnSpacer2 />
        <TextLabelLargePrimary>Label Large</TextLabelLargePrimary>
        <TextLabelMediumNeutral80>Label Medium Neutral 80</TextLabelMediumNeutral80>
        <TextLabelSmall color={colors.primary}>Label Small</TextLabelSmall>
        <ColumnSpacer2 />
        <CircularProgress />
        <ColumnSpacer2 />
        <CircularProgress size="small" />
      </View>

      <AppDividerPrimary />

      <View style={styles.section}>
        <TextTitleLargePrimary>Button Components</TextTitleLargePrimary>
        <ColumnSpacer4 />
        <ContainedButton text="Contained Button" onPress={() => console.log('Contained')} />
        <ColumnSpacer2 />
        <OutlinedButton text="Outlined Button" onPress={() => console.log('Outlined')} />
        <ColumnSpacer2 />
        <AppTextButton text="Text Button" onPress={() => console.log('Text')} />
        <ColumnSpacer2 />
        <AppTextButtonError text="Text Button Error" onPress={() => console.log('Error')} />
      </View>

      <AppDividerPrimary />

      <View style={styles.section}>
        <TextTitleLargePrimary>Card Components</TextTitleLargePrimary>
        <ColumnSpacer4 />

        <AppCard elevated={false}>
          <TextBodyLarge color={colors.neutral80}>App Card</TextBodyLarge>
          <TextBodySmallNeutral80>This is a basic card component</TextBodySmallNeutral80>
        </AppCard>

        <ColumnSpacer4 />

        <AppCard onPress={() => console.log('Card pressed')}>
          <TextBodyLarge color={colors.neutral80}>Elevated Card (Clickable)</TextBodyLarge>
          <TextBodySmallNeutral80>This card has elevation and is clickable</TextBodySmallNeutral80>
        </AppCard>
        <ColumnSpacer4 />
        <AppCheckbox
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      <ColumnSpacer2 />
      <AppSwitch
        value={switchValue}
        onValueChange={(newValue) => setSwitchValue(newValue)}
      />
      <ColumnSpacer4 />

      <AppTextField value={textValue} onChangeText={setTextValue} label='label'/>
      <ColumnSpacer4 />

      <ColumnSpacer12 />
      </View>
            <ColumnSpacer12 />
      <ColumnSpacer12 />
      <ColumnSpacer12 />
      <ColumnSpacer12 />
      <ColumnSpacer12 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: space4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: space4,
  },
});

export default App;

import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import {
  TextBodyLarge,
  TextBodyLargeNeutral100,
  TextBodyLargeNeutral80,
  TextBodyLargePrimary,
  TextBodyMedium,
  TextBodyMediumNeutral100,
  TextBodyMediumNeutral80,
  TextBodySmall,
  TextBodySmallNeutral80,
  TextHeadlineMedium,
  TextHeadlineMediumPrimary,
  TextLabelLarge,
  TextButtonPrimary,
  TextButtonNeutral0,
  TextButtonError,
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
  AppElevatedCard,
  AppTextField,
  AppCheckbox,
  AppSwitch,
  ColumnSpacer2,
  ColumnSpacer4,
  ColumnSpacer6,
  AppDividerPrimary,
  CircularProgress,
  ErrorView,
} from '../presentation/components';
import { space4 } from '../presentation/foundation/dimensions';
import { lightTheme } from '../presentation/foundation';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={lightTheme}>
      <TestScreen />
    </PaperProvider>
  );
}

const TestScreen = () => {
  const [textValue, setTextValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ScrollView style={styles.container}>
        <TextHeadlineMediumPrimary>Component Showcase</TextHeadlineMediumPrimary>

      {/* Text Components */}
      {/* <View style={styles.section}>
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
        <TextLabelLarge uppercase>Label Large</TextLabelLarge>
        <TextButtonPrimary>Button Primary Text</TextButtonPrimary>
        <TextButtonError>Button Error Text</TextButtonError>
        <TextLabelMedium>Label Medium</TextLabelMedium>
        <TextLabelSmall>Label Small</TextLabelSmall>
      </View> */}

      {/* <AppDividerPrimary /> */}

      {/* <View style={styles.section}>
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

        <AppCard>
          <TextBodyLarge>App Card</TextBodyLarge>
          <TextBodySmallNeutral80>This is a basic card component</TextBodySmallNeutral80>
        </AppCard>

        <ColumnSpacer4 />

        <AppElevatedCard onPress={() => console.log('Card pressed')}>
          <TextBodyLarge>Elevated Card (Clickable)</TextBodyLarge>
          <TextBodySmallNeutral80>This card has elevation and is clickable</TextBodySmallNeutral80>
        </AppElevatedCard>
      </View>

      <AppDividerPrimary />

      <View style={styles.section}>
        <TextTitleLargePrimary>Form Components</TextTitleLargePrimary>
        <ColumnSpacer4 />

        <AppTextField
          value={textValue}
          onChangeText={setTextValue}
          label="Text Field"
          placeholder="Enter text here..."
        />

        <ColumnSpacer4 />

        <View style={styles.row}>
          <AppCheckbox checked={checked} onPress={() => setChecked(!checked)} />
          <TextBodyMedium>Checkbox Example</TextBodyMedium>
        </View>

        <ColumnSpacer4 />

        <View style={styles.row}>
          <AppSwitch value={switchValue} onValueChange={setSwitchValue} />
          <TextBodyMedium>Switch Example</TextBodyMedium>
        </View>
      </View>

      <AppDividerPrimary /> */}

      {/* <View style={styles.section}>
        <TextTitleLargePrimary>Utility Components</TextTitleLargePrimary>
        <ColumnSpacer4 />

        <TextBodyMedium>Circular Progress:</TextBodyMedium>
        <ColumnSpacer2 />
        <CircularProgress />

        <ColumnSpacer6 />

        <TextBodyMedium>Error View (compact):</TextBodyMedium>
        <ColumnSpacer2 />
        <View style={{ height: 200 }}>
          <ErrorView
            message="Something went wrong!"
            onRetry={() => console.log('Retry')}
          />
        </View>
      </View>

      <View style={{ height: 100 }} /> */}
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

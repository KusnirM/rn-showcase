import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { lightTheme } from '../presentation/foundation';
import { RootStackNavigator } from '../presentation/navigation';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={lightTheme}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

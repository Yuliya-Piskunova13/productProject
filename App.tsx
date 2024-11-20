import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {I18nextProvider} from 'react-i18next';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import i18n from './src/shared/locales/i18n';
import {initializeAuthData} from './src/features/auth/model/authStorage';
import AppNavigator from './src/app/navigation/AppNavigator';

initializeAuthData();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <GestureHandlerRootView style={{flex: 1}}>
          <StatusBar hidden />
          <AppNavigator />
        </GestureHandlerRootView>
      </I18nextProvider>
    </SafeAreaProvider>
  );
}

export default App;

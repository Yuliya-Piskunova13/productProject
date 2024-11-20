import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, ScrollView, View} from 'react-native';
import {$authData, clearAuthData, saveAuthDataFx} from './model/authStorage';
import {useUnit} from 'effector-react';
import Config from 'react-native-config';
import {Text} from '../../shared/ui/Text';

function Auth(): React.JSX.Element {
  const isFrom = Config.APP_CONFIG ?? '';

  const authData = useUnit($authData);

  const handleSave = async () => {
    await saveAuthDataFx({
      token: 'example-token',
      login: 'example-login',
      password: 'example-password',
    });
  };

  const handleClear = () => {
    clearAuthData();
  };

  const {t} = useTranslation();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>{`I am from ${isFrom}`}</Text>

      <View>
        <Text>Token: {authData.token}</Text>
        <Text>
          {t('some')} {authData.login}
        </Text>
        <Text>Password: {authData.password}</Text>
        <Button title="Save Auth Data" onPress={handleSave} />
        <Button title="Clear Auth Data" onPress={handleClear} />
      </View>
    </ScrollView>
  );
}

export default Auth;

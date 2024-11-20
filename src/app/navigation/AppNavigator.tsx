import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useStoreMap} from 'effector-react';
import {$authData} from '../../features/auth/model/authStorage';
import AuthStack from './AuthStack';
import BottomTabNavigator from './BottomTabNavigator';
import {useTheme} from '../../shared/theme/useTheme';

const AppNavigator = () => {
  const isAuth = useStoreMap($authData, item => item.token);

  const {navigationTheme} = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      {isAuth ? <BottomTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;

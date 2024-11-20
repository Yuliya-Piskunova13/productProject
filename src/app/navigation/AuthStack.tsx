import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInPage from '../../pages/SignInPage';
import SignUpPage from '../../pages/SignUpPage';
import {AuthStackParamList} from './types';
import {Routes} from './constants';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.SignIn} component={SignInPage} />
    <Stack.Screen name={Routes.SignUp} component={SignUpPage} />
  </Stack.Navigator>
);

export default AuthStack;

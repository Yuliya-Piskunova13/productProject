import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardPage from '../../pages/DashboardPage';
import HomePage from '../../pages/HomePage';
import {DashboardStackParamList} from './types';
import {Routes} from './constants';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.HousesList} component={DashboardPage} />
    <Stack.Screen name={Routes.Home} component={HomePage} />
  </Stack.Navigator>
);

export default DashboardStack;

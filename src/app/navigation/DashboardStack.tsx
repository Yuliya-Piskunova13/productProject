import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardPage} from '../../pages/DashboardPage';
import ApartmentPage from '../../pages/ApartmentPage';
import {DashboardStackParamList} from './types';
import {Routes} from './constants';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.HousesList} component={DashboardPage} />
    <Stack.Screen name={Routes.Apartment} component={ApartmentPage} />
  </Stack.Navigator>
);

export default DashboardStack;

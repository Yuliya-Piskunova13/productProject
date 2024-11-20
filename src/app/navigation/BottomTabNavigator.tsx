import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardStack from './DashboardStack';
import ProfileStack from './ProfileStack';
import SettingsPage from '../../pages/SettingsPage';
import {BottomTabParamList} from './types';
import {Routes} from './constants';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={Routes.Dashboard} component={DashboardStack} />
    <Tab.Screen name={Routes.Profile} component={ProfileStack} />
    <Tab.Screen name={Routes.Settings} component={SettingsPage} />
  </Tab.Navigator>
);

export default BottomTabNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage from '../../pages/ProfilePage';
import {ProfileStackParamList} from './types';
import {Routes} from './constants';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Routes.UserProfile} component={ProfilePage} />
  </Stack.Navigator>
);

export default ProfileStack;

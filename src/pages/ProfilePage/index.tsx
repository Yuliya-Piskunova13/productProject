import React from 'react';
import {Button, View} from 'react-native';
import {clearAuthData} from '../../features/auth/model/authStorage';

const ProfilePage = () => {
  return (
    <View>
      <Button title="Clear Auth Data" onPress={() => clearAuthData()} />
    </View>
  );
};

export default ProfilePage;

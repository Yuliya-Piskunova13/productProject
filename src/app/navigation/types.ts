import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type DashboardStackParamList = {
  HousesList: undefined;
  Apartment: {apartmentId: string};
};

export type ProfileStackParamList = {
  UserProfile: undefined;
};

export type BottomTabParamList = {
  Dashboard: NavigatorScreenParams<DashboardStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
  Settings: undefined;
};

export type AppStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Tabs: NavigatorScreenParams<BottomTabParamList>;
};

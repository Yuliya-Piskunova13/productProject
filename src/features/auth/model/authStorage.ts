import * as Keychain from 'react-native-keychain';
import {createEvent, createStore, createEffect, sample} from 'effector';

export type AuthData = {
  token: string | null;
  login: string | null;
  password: string | null;
};

export const clearAuthData = createEvent();
export const initializeAuthData = createEvent();

export const saveAuthDataFx = createEffect<AuthData, AuthData, Error>(
  async authData => {
    const {token, login, password} = authData;

    try {
      if (login && password) {
        await Keychain.setGenericPassword(login, password, {
          service: 'userAuth',
        });
        console.log('Login and password saved to Keychain.');
      }

      if (token) {
        await Keychain.setInternetCredentials('authToken', 'tokenKey', token, {
          service: 'authToken',
        });
        console.log('Token saved to Keychain.');
      }

      return authData;
    } catch (error) {
      console.error('Error saving data to Keychain:', error);
      throw error;
    }
  },
);

export const loadAuthDataFx = createEffect<void, AuthData | null, Error>(
  async () => {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'userAuth',
      });
      const tokenData = await Keychain.getInternetCredentials('authToken', {
        service: 'authToken',
      });

      if (credentials && tokenData) {
        const {username: login, password} = credentials;
        const {password: token} = tokenData;

        console.log('Auth data loaded from Keychain.');
        return {token, login, password};
      } else {
        console.warn('No auth data found in Keychain.');
        return null;
      }
    } catch (error) {
      console.error('Error loading data from Keychain:', error);
      throw error;
    }
  },
);

export const clearAuthDataFx = createEffect<void, void, Error>(async () => {
  try {
    await Keychain.resetGenericPassword({service: 'userAuth'});
    await Keychain.resetInternetCredentials({service: 'authToken'});
    console.log('Auth data cleared from Keychain.');
  } catch (error) {
    console.error('Error clearing data from Keychain:', error);
    throw error;
  }
});

export const $authData = createStore<AuthData>({
  token: null,
  login: null,
  password: null,
})
  .on(saveAuthDataFx.doneData, (_, authData) => authData)
  .on(
    loadAuthDataFx.doneData,
    (_, authData) => authData || {token: null, login: null, password: null},
  )
  .reset(clearAuthDataFx.done);

sample({
  clock: initializeAuthData,
  target: loadAuthDataFx,
  skipVoid: false,
});

clearAuthData.watch(clearAuthDataFx);

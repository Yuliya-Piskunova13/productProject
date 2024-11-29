import {createStore} from 'effector';
import {createEffect} from 'effector';

import {Apartment} from '../types';
import {APARTMENTS} from '../lib/constants';

export const fetchApartmentsFx = createEffect<void, Apartment[], Error>(
  async () => {
    return new Promise<Apartment[]>(resolve => {
      setTimeout(() => {
        resolve(APARTMENTS);
      }, 2000); // fake api call
    });
  },
);

export const $loading = createStore(false).on(
  fetchApartmentsFx.pending,
  (_, pending) => pending,
);

export const $error = createStore<Error | null>(null).on(
  fetchApartmentsFx.failData,
  (_, error) => error,
);

export const $apartments = createStore<Apartment[]>([]).on(
  fetchApartmentsFx.doneData,
  (_, apartments) => apartments,
);

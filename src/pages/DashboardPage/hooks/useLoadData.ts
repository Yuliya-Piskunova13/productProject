import {useEffect} from 'react';
import {
  $apartments,
  $loading,
  fetchApartmentsFx,
} from '../../../entities/apartments';
import {useUnit} from 'effector-react';

export const useLoadData = () => {
  const apartments = useUnit($apartments);
  const isLoading = useUnit($loading);

  useEffect(() => {
    fetchApartmentsFx();
  }, []);

  return {apartments, isLoading};
};

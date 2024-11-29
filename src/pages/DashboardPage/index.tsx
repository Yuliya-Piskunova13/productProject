import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';

import {useLoadData} from './hooks/useLoadData';
import {Routes} from '../../app/navigation/constants';
import {ApartmentCard} from '../../features/apartment-card/ui/ApartmentCard';
import {DashboardStackParamList} from '../../app/navigation/types';
import {Loader} from '../../shared/ui/Loader';

export const DashboardPage = () => {
  const {apartments, isLoading} = useLoadData();
  const navigation =
    useNavigation<StackNavigationProp<DashboardStackParamList>>();

  const handlePress = (id: string) => {
    navigation.navigate(Routes.Apartment, {apartmentId: id});
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={apartments}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ApartmentCard
            name={item.name}
            year={item.year}
            owner={item.owner}
            imageUrl={item.imageUrl}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
};

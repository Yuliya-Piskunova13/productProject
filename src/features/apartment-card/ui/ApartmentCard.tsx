import React from 'react';
import FastImage from 'react-native-fast-image';
import {useTranslation} from 'react-i18next';

import {Card} from '../../../shared/ui/Card';
import {Text} from '../../../shared/ui/Text';
import {Button} from '../../../shared/ui/Button';
import {Space} from '../../../shared/ui/Space';
import styles from './styles';

type ApartmentCardProps = {
  name: string;
  year: number;
  owner: string;
  imageUrl: string;
  onPress: () => void;
};

export const ApartmentCard = ({
  name,
  year,
  owner,
  imageUrl,
  onPress,
}: ApartmentCardProps) => {
  const {t} = useTranslation();
  return (
    <Card>
      <FastImage source={{uri: imageUrl}} style={styles.image} />
      <Space />
      <Text>{name}</Text>
      <Text>
        {t('apartmentCard.buildYear')}: {year}
      </Text>
      <Text>
        {t('apartmentCard.owner')}: {owner}
      </Text>
      <Space />
      <Button title={t('apartmentCard.viewDetails')} onPress={onPress} />
    </Card>
  );
};

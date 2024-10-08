import React from 'react';
import { Animated } from 'react-native';


import {
  CardContainer,
  CardFavoriteContainer,
  CardImageContainer,
  CarImage,
  FlexRow,
  MainCardTitle,
  TextsWrapper,
} from '../../styles/Styled';
import VehicleTitleHeader from './VehicleTitleHeader';
import { formatHumanReadableDate } from '../../utils/helper';
import DetailRow from './DetailRow';
import { CardFooter } from './styled';
import PulseText from '../pulse-text/PulseText';
import colors from '../../configrations/Colors';
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '../../configrations/VectorIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/AppStack';
import { toggleFavourite } from '../../redux/vehiclesSlicer';
import { useDispatch, useSelector } from 'react-redux';

interface CardProps {
  item: any;
  scale: any;
  opacity: any;
}

const Card: React.FC<CardProps> = ({ item, scale, opacity }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const { favourites } = useSelector((DataState: any) => DataState.vehiclesData);

  return (
    <Animated.View style={{ transform: [{ scale }], opacity }}>
      <CardContainer
        testID="card-container"
        activeOpacity={0.8}
        onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}
      >
        <CardImageContainer>
          <CarImage
            source={{ uri: 'https://loremflickr.com/200/200/cars' }}
            resizeMode="cover"
          />
          <VehicleTitleHeader iconName="construct-sharp" title={item?.make} />
          <VehicleTitleHeader iconName="car-sport" title={item?.model} />
        </CardImageContainer>
        <TextsWrapper>
          <MainCardTitle>
            <DetailRow
              iconName="timer-cog"
              value={item?.year}
              IconComponent={MaterialCommunityIcons}
              iconSize={18}
            />
          </MainCardTitle>
          <FlexRow spaceBetween mt>
            <DetailRow
              iconName="gas-pump"
              value={item?.fuel}
              IconComponent={FontAwesome5}
              iconSize={16}
            />
            <DetailRow
              iconName="tachometer"
              value={item?.mileage}
              IconComponent={FontAwesome}
              left={-30}
            />
          </FlexRow>
          <FlexRow spaceBetween mt>
            <DetailRow
              iconName="engine"
              value={item?.engineSize}
              IconComponent={MaterialCommunityIcons}
            />
            <DetailRow
              iconName="gavel"
              value={formatHumanReadableDate(item?.auctionDateTime)}
              IconComponent={MaterialCommunityIcons}
              iconSize={20}
              left={20}
            />
          </FlexRow>
        </TextsWrapper>

        <CardFooter>
          <FontAwesome5 name="money-bill-wave" size={18} color={colors.iconBill} />
          <PulseText message={item?.startingBid} />
        </CardFooter>

        <CardFavoriteContainer
          testID="card-favorite-container"
          activeOpacity={0.8}
          onPress={() => dispatch(toggleFavourite(item?.id))}
        >
          <Ionicons
            name="bookmark"
            size={34}
            color={(favourites || []).includes(item?.id) ? colors.favSelected : colors.favUnSelected}
          />
        </CardFavoriteContainer>
      </CardContainer>
    </Animated.View>
  );
};

export default React.memo(Card);

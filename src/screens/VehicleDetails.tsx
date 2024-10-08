import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/AppStack';
import ImageCarousel from '../component/carousel/ImageCarousel';
import {
  AuctionDateText,
  CarouselContainer,
  FlotingBacButton,
  InfoContainer,
  ScrollableText,
  ScrollableTextContainer,
  VehicleDetailsBidButton,
  VehicleDetailsBottomContainer,
  VehicleDetailsButtonText,
  VehicleDetailsContainer,
  VehicleDetailsFavoriteContainer,
  VehicleDetailsPriceContainer,
  VehicleDetailsPriceText,
  VehicleDetailsRow,
  VehicleDetailsSubTitleText,
  VehicleDetailsTitleText,
  VehicleDetailsYearText,
  VehicleTitleDetailsContainer,
} from '../styles/Styled';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '../configrations/VectorIcons';
import colors from '../configrations/Colors';
import VehicleDetailElementRow from '../component/details-screen/VehicleDetailsRow';
import { formatHumanReadableDate } from '../utils/helper';
import { descriptionText } from '../configrations/LoremText';

type VehicleDetailsNavigationProp = NavigationProp<RootStackParamList, 'VehicleDetails'>;

const VehicleDetails: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'VehicleDetails'>>();
  const navigation = useNavigation<VehicleDetailsNavigationProp>();
  const { vehicle } = route.params;
  const vehicleDetails = [
    { iconName: 'engine', title: 'Engine', description: vehicle?.engineSize, IconComponent: MaterialCommunityIcons },
    { iconName: 'gas-pump', title: 'Fuel', description: vehicle?.fuel, IconComponent: FontAwesome5 },
    { iconName: 'tachometer', title: 'Mileage', description: vehicle?.mileage, IconComponent: FontAwesome },
  ];

  return (
    <VehicleDetailsContainer>
      <StatusBar backgroundColor="#115e59" barStyle="light-content" />
      <FlotingBacButton onPress={()=> navigation.goBack()} >
        <Ionicons name="chevron-back" size={24} color={'#FFF'} />
      </FlotingBacButton>
      <CarouselContainer>
        <ImageCarousel height={200} width={400} animation autoSlide showDots />
      </CarouselContainer>
      <VehicleDetailsBottomContainer>
        <VehicleDetailsFavoriteContainer activeOpacity={0.8}>
          <Ionicons name="bookmark" size={44} color={vehicle?.favourite ? colors.favSelected : colors.favUnSelected} />
        </VehicleDetailsFavoriteContainer>
        <VehicleTitleDetailsContainer>
          <VehicleDetailsTitleText>
            {vehicle?.make}
            <VehicleDetailsSubTitleText>    {vehicle?.model}</VehicleDetailsSubTitleText>
          </VehicleDetailsTitleText>
          <VehicleDetailsYearText>Year: {vehicle?.year}</VehicleDetailsYearText>
        </VehicleTitleDetailsContainer>
        <ScrollableTextContainer>
          <ScrollableText>{descriptionText}</ScrollableText>
        </ScrollableTextContainer>
        <VehicleDetailsRow>
          {vehicleDetails.map((detail, index) => (
            <VehicleDetailElementRow
              key={index}
              iconName={detail.iconName}
              title={detail.title}
              description={detail.description}
              IconComponent={detail.IconComponent}
              iconSize={22}
            />
          ))}
        </VehicleDetailsRow>
        <AuctionDateText>{formatHumanReadableDate(vehicle?.auctionDateTime,true)}</AuctionDateText>
        <InfoContainer>
          <VehicleDetailsPriceContainer>
            <VehicleDetailsPriceText> ${vehicle?.startingBid}</VehicleDetailsPriceText>
            <VehicleDetailsBidButton>
              <VehicleDetailsButtonText>Bid</VehicleDetailsButtonText>
            </VehicleDetailsBidButton>
          </VehicleDetailsPriceContainer>
        </InfoContainer>
      </VehicleDetailsBottomContainer>
    </VehicleDetailsContainer>
  );
};

export default VehicleDetails;

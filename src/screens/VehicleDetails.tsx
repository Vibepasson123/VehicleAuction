import React from 'react';
import { StatusBar } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/AppStack';
import ImageCarousel from '../component/carousel/ImageCarousel';
import { CarouselContainer, InfoContainer, VehicleDetailsBidButton, VehicleDetailsBottomContainer, VehicleDetailsButtonText, VehicleDetailsContainer, VehicleDetailsPriceContainer, VehicleDetailsPriceText } from '../styles/Styled';

type VehicleDetailsRouteProp = RouteProp<RootStackParamList, 'VehicleDetails'>;



const VehicleDetails: React.FC = () => {
  const route = useRoute<VehicleDetailsRouteProp>();
  const { id } = route.params;

  return (
    <VehicleDetailsContainer>
      <StatusBar backgroundColor="#fff" barStyle="light-content" />
      <CarouselContainer>
        <ImageCarousel height={200} width={400} animation autoSlide showDots />
      </CarouselContainer>
      <VehicleDetailsBottomContainer>
        <InfoContainer>
          <VehicleDetailsPriceContainer>
            <VehicleDetailsPriceText>${500.00}</VehicleDetailsPriceText>
            <VehicleDetailsBidButton>
              <VehicleDetailsButtonText>Bid{id}</VehicleDetailsButtonText>
            </VehicleDetailsBidButton>
          </VehicleDetailsPriceContainer>
        </InfoContainer>
      </VehicleDetailsBottomContainer>
    </VehicleDetailsContainer>
  );
};

export default VehicleDetails;

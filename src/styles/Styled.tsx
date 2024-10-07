import styled, { css } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { Image, TouchableOpacity } from 'react-native';

import LottieView from 'lottie-react-native';
import colors from '../configrations/Colors';

interface CardContainerProps {
  cardWidth?: string;
}
interface CardNewTagImageProps {
  isAddBottom?: boolean;
}
interface PriceContainerTagProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  opacity?: number;
  left?: number;
}
export const TabBarContainer = styled.View`
 position: absolute;
  flex-direction: row;
  width: 90%;
  bottom:3%;
  margin-left:5%;
  margin-right:5%;
  height: 80px;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.tabBarContainer};
  border-radius: 25px;
  border-width: 2px;
  border-color: ${colors.tabBarContainer};
  elevation: 16;
  shadow-color: black;
  shadow-offset: 6.2px -8.2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
`;
export const SplashContainer = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;
export const BottomTabItem = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  height: 35px;
`;

export const BottomTabLabel = styled(Animated.Text)`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color:${colors.primaryBackground};
`;

export const CardContainer = styled(TouchableOpacity) <CardContainerProps>`
  width:${(props) => (props.cardWidth ? `${props.cardWidth}%` : '100%')};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  background-color: #FFFF;
  border-radius: 16px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
  align-self: center;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 9px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
  elevation: 5;
`;
export const CardDescription = styled.Text<{
  textAligment?: 'left' | 'right' | 'center';
}>`
  width: 160px;
  height: 36px; 
  font-family: CircularStd-Medium;
  font-style: normal;
  margin-bottom: 5px;
  text-align: ${({ textAligment }) => textAligment || 'left'};
  font-size: 12px;
  line-height: 18px;
  color: #7e7e7e;
`;
export const FavCardContainer = styled.TouchableOpacity<{ ml?: boolean; height?: boolean }>`
  width: 190px;
  height: ${(props) => (props.height ? '280px' : '280px')};
  min-height: 290px;
  background-color: white;
  border-radius: 15px;
  margin-left: 16px;
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 13px;
`;
export const CardColContainer = styled.TouchableOpacity<{ ml?: boolean }>`
  width: 170px;
  background-color: white;
  border-radius: 15px;
  margin-left: 15px;
  margin-bottom: 20px;
  margin-right: 15px;
  min-height: 290px;
`;
export const CardColImage = styled(Image)`
  height: undefined;
  width: 100%;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const CardColLottie = styled(LottieView).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  aspect-ratio: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: 'red';
`;
export const CardNewTagImage = styled(Image) <CardNewTagImageProps>`
  position: absolute;
  height: ${(props) => (props.isAddBottom ? '15%' : '25%')};
  width: ${(props) => (props.isAddBottom ? '25%' : '32%')};
  right: 0;
  aspect-ratio: 1;
  bottom: ${(props) => (props.isAddBottom ? '82%' : '70px')};
`;

export const CardImageContainer = styled.View`
  width: 150px;
  height: 150px;
  shadow-color: black;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2; 
  shadow-radius: 8px; 
  elevation: 5; 
  background-color: white; 
  border-radius: 15px;
  
`;

export const FavCardImage = styled(Image)`
  height: undefined;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
export const FavTitleWrapper = styled.View`
  padding: 12px;
`;

export const CourseTitle = styled.Text`
  font-size: 16px;
  width: 124px;

  font-weight: 700;
  line-height: 24px;
  color: #222222;
`;

export const TimeText = styled.Text`
  font-size: 12px;
  margin-left: 4px;
`;
export const CardFavoriteContainer = styled.TouchableOpacity`
  width: 34px;
  height: 34px;
  position: absolute;
  top: -10px;
  right: 1px;
  z-index: 1;
`;

export const ImageView = styled(Image)`
  height: 94px;
  width: 105px;
  border-radius: 12px;

`;
export const TextsWrapper = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
`;
export const MainCardTitle = styled.Text<{ bigText?: boolean; marginTop?: number }>`
  font-weight:600;
  font-size: 16px;
  line-height: 24px;
  color: #44403C;
  ${(props) =>
    props.bigText &&
    css`
      max-width: 250px;
    `}
`;
export const IconDetailHeaderTail = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ContainerFooter = styled.View<{ background: any }>`
  background-color: ${({ background }) => background};
  flex: 1;
  border-top-left-radius: 75px;
  padding-left: 20px;
  padding-right: 20px;
`;


export const Title = styled.Text`
  font-size: 17px;
  line-height: 24px;
  color: #000;
  width: 291px;
  text-align: center;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  width: 291px;
  text-align: center;
  text-decoration-line: underline;
  top: -5px;
  margin-bottom: 27px; */
`;

export const StepperText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #222222;
`;
export const CelebrationButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 5px;
  height: 67px;
  width: 67px;
  background-color: #77cac6;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 5px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  elevation: 5;
  align-items: center;
  justify-content: center;
  border-radius: 33.5px;
  z-index: 9999999;
`;
export const CelebrationButtonText = styled.Text`
  font-size: 40px;
  left: 6px;
`;

export const AnimatedContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardFooter = styled.View`
  position: absolute;
  left: 15px;
  bottom: 5%;
  align-self: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
  justify-content: space-between;
`;

export const PhoneNumberContainer = styled.TouchableOpacity`
  position: relative;
  width: 45%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const FlexRow = styled.View<{
  spaceBetween?: boolean;
  spaceAround?: boolean;
  ml?: boolean;
  mr?: boolean;
  mt?: boolean;
  mb?: boolean;
  center?: boolean;
}>`
  flex-direction: row;
  align-items: center;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}
    ${(props) =>
    props.spaceAround &&
    css`
        justify-content: space-around;
      `}
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.ml &&
    css`
      margin-left: 24px;
    `}
  ${(props) =>
    props.mr &&
    css`
      margin-right: 24px;
    `}
  ${(props) =>
    props.mt &&
    css`
      margin-top: 16px;
    `}
     ${(props) =>
    props.mb &&
    css`
      margin-bottom: 16px;
    `}
`;

export const PhoneText = styled.Text`
  color: #7e7e7e;
  flex-wrap: wrap;
  width: 80%; 
  left:2%;
`;
export const PriceText = styled.Text`
    position: absolute;
    color: blue;
    lex-wrap: wrap;
    width: 80%;
    font-size:29px;
    font-weight:700; 
    left:60px;

`;
export const PriceContainer = styled.View`
  position: relative;
  margin-left: 8%;
  width: 55%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius:5px;
`;
export const PriceContainerTag = styled.View<PriceContainerTagProps>`
  position: 'absolute';
  height: ${({ height }) => height || 100}px;
  width: ${({ width }) => width || 250}px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'blue'};
  justify-content: center;
  align-items: flex-start;
  align-items: center;
  margin: 10px;
  border-radius:16px;
  opacity: ${({ opacity }) => opacity ?? 0.7}; 
`;
export const CarImage = styled(Image)`
  width: 150px;
  height: 90px;
  border-radius: 15px;
`;
export const VehicleDetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #115e59;
`;

export const CarouselContainer = styled.View`
  height: 250px;
  width: 400px;
  top: 60px;
`;

export const VehicleDetailsBottomContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 60%;
  width: 100%;
  background-color: #022c22;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  shadow-color: #ffffff;
  shadow-offset: 0px -10px;
  shadow-opacity: 0.25;
  shadow-radius: 30px;
  elevation: 5;
`;

export const InfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 25%;
  width: 100%;
  background-color: white;
  align-items: center;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  shadow-color: #ffffff;
  shadow-offset: 0px -10px;
  shadow-opacity: 0.19;
  shadow-radius: 30px;
  elevation: 5;
`;

export const VehicleDetailsPriceContainer = styled.View`
  position: absolute;
  bottom: 20px;
  height: 60%;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const VehicleDetailsBidButton = styled.TouchableOpacity`
  height: 50px;
  width: 130px;
  background-color: #0d9488;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  shadow-color: #064e3b;
  shadow-offset: -5px 10px;
  shadow-opacity: 0.49;
  shadow-radius: 12px;
  elevation: 5;
`;

export const VehicleDetailsPriceText = styled.Text`
  font-size: 27px;
  font-weight: 800;
  color: #52525b;
`;

export const VehicleDetailsButtonText = styled.Text`
  font-size: 21px;
  font-weight: 600;
  color: white;
`;

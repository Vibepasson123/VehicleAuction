import styled  from 'styled-components/native';
import Animated from 'react-native-reanimated';


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
  background-color: #3B82F6;
  border-radius: 25px;
  border-width: 2px;
  border-color: #3B82F6;
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

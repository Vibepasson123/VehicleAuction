
import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const AnimatedContainer = styled(Animated.View)`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const CarouselImage = styled.Image`
  position: relative;
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: 8px;
  overflow: hidden;
  border-bottom-left-radius: 8px;
`;

export const CarouselIndicatorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CarouselAnimatedDot = styled(Animated.View)`
  height: 8px;
  border-radius: 4px;
  margin-horizontal: 4px;
`;

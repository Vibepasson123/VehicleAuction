import React from 'react';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';
import colors from '../../configrations/Colors';

interface VaSliderProps {
  minValue: number;
  maxValue: number;
  step: number;
  onValueChange: (value: number) => void;
  currentValue: number;
}

const VaSlider: React.FC<VaSliderProps> = ({ minValue, maxValue, step, onValueChange, currentValue }) => {
  return (
    <SliderContainer>
      <SliderLabel>Bid Price Range: {currentValue} </SliderLabel>
      <StyledSlider
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        value={currentValue}
        onValueChange={onValueChange}
        minimumTrackTintColor="#60A5FA"
        maximumTrackTintColor="#444"
        thumbTintColor={colors.primary}
      />
      <SliderScale>
        <ScaleText>{minValue} </ScaleText>
        <ScaleText>{maxValue} </ScaleText>
      </SliderScale>
    </SliderContainer>
  );
};

export default VaSlider;

const SliderContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 10px;
  background-color:#eef2ff;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;

const SliderLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-bottom: 10px;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 40px;
`;

const SliderScale = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 5px;
`;

const ScaleText = styled.Text`
  font-size: 14px;
  color: #444;
`;

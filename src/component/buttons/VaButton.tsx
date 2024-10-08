import React from 'react';
import styled from 'styled-components/native';
import colors from '../../configrations/Colors';

interface VaButtonProps {
  title: string;
  onPress: () => void;
}

const VaButton: React.FC<VaButtonProps> = ({ title, onPress }) => {
  return (
    <VmStyledButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </VmStyledButton>
  );
};

export default VaButton;

const VmStyledButton = styled.TouchableOpacity`
  width: 90%;
  align-self: center;
  padding: 15px;
  background-color: ${colors.primary};
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

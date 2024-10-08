import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TitleText, VehicleTitleHeaderContainer } from './styled';
import { truncateText } from '../../utils/helper';

interface VehicleTitleHeaderProps {
  iconName: string;
  iconColor?: string;
  title: string;
}

const VehicleTitleHeader: React.FC<VehicleTitleHeaderProps> = ({ iconName, iconColor = '#52525B', title }) => {
  return (
    <VehicleTitleHeaderContainer>
      <Icon name={iconName} size={20} color={iconColor} />
      <TitleText numberOfLines={2}>{truncateText(title,10)}</TitleText>
    </VehicleTitleHeaderContainer>
  );
};



export default VehicleTitleHeader;

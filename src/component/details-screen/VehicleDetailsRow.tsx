import React from 'react';
import {
  VehicleDetailsElement,
  VehicleDetailsTextContainer,
  VehicleDetailsTitle,
  VehicleDetailsDescription,
} from './styled';

interface DetailRowProps {
  iconName: string;
  title: string;
  description: string | number;
  IconComponent: React.ComponentType<any>;
  iconSize?: number;
  color?: string;
}

const VehicleDetailElementRow: React.FC<DetailRowProps> = ({
  iconName,
  title,
  description,
  IconComponent,
  iconSize = 26,
  color = '#2DD4BF',
}) => (
  <VehicleDetailsElement>
    <IconComponent name={iconName} size={iconSize} color={color} />
    <VehicleDetailsTextContainer>
      <VehicleDetailsTitle>{title}</VehicleDetailsTitle>
      <VehicleDetailsDescription>{description}</VehicleDetailsDescription>
    </VehicleDetailsTextContainer>
  </VehicleDetailsElement>
);

export default VehicleDetailElementRow;

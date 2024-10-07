/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { FlexRow } from '../../styles/Styled';
import { formatValue } from '../../utils/helper';
import colors from '../../configrations/Colors';

interface DetailRowProps {
	iconName: string;
	value: string | number;
	IconComponent: React.ComponentType<any>;
	left?: number;
	iconSize?: number;
}

const DetailRow: React.FC<DetailRowProps> = ({
	iconName,
	value,
	IconComponent,
	left = 0,
	iconSize = 14,
}) => (
	<FlexRow style={{ left }}>
		<IconComponent name={iconName} size={iconSize} color={colors.icon}  />
		<Text style={{ marginLeft: 4 , color:colors.text}} numberOfLines={2}>
			{formatValue(value)}
		</Text>
	</FlexRow>
);

export default DetailRow;

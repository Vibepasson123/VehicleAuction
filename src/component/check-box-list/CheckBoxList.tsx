import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { resetData } from '../../redux/vehiclesSlicer';

interface ListItem {
	id: string;
	label: string;
	checked: boolean;
	field: string;
	order: 'asc' | 'dsc';
}

interface CheckBoxListProps {
	onPress: (val:ListItem, checked: boolean) => void;
}

const CheckBoxList = ({ onPress }: CheckBoxListProps) => {
	const dispatch = useDispatch();
	const [items, setItems] = useState<ListItem[]>([
		{ id: '1', label: 'Bid Price  ⬆', field: 'startingBid', order: 'asc', checked: false },
		{ id: '2', label: 'Bid Price  ⬇', field: 'startingBid', order: 'dsc', checked: false },
		{ id: '3', label: 'Year         ⬆', field: 'year', order: 'asc', checked: false },
		{ id: '4', label: 'Year         ⬇', field: 'year', order: 'dsc', checked: false },
		{ id: '5', label: 'Modal      ⬆', field: 'model', order: 'asc', checked: false },
		{ id: '6', label: 'Modal      ⬇', field: 'model', order: 'dsc', checked: false },
		{ id: '7', label: 'Petrol ', field: 'petrol', order: 'asc', checked: false },
		{ id: '8', label: 'Diesel ', field: 'diesel', order: 'asc', checked: false },
		{ id: '9', label: 'EngineSize ⬆', field: 'engineSize', order: 'asc', checked: false },
		{ id: '10', label: 'EngineSize ⬇', field: 'engineSize', order: 'dsc', checked: false },
		{ id: '11', label: 'Clear-Filter', field: 'none', order: 'dsc', checked: false },
	]);

	const handlePress = (id: string) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		);
		if(id === '11'){
			dispatch(resetData());

		}
		const selectedItem = items.find((item) => item.id === id);
		if (selectedItem) {
			onPress(selectedItem, !selectedItem.checked);
		}
	};

	const renderItem = ({ item }: { item: ListItem }) => (
		<TouchableOpacityContainer onPress={() => handlePress(item.id)}>
			<LabelText>{item.label}</LabelText>
			<Ionicons
				name={item.checked ? 'checkbox-outline' : 'square-outline'}
				size={24}
				color={item.checked ? '#14B8A6' : '#44403C'}
			/>
		</TouchableOpacityContainer>
	);

	return (
		<ListContainer>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
			/>
		</ListContainer>
	);
};

const TouchableOpacityContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-vertical: 6px;
  background-color: #f1f5f9;
  border-radius: 8px;
`;

const LabelText = styled(Text)`
  font-size: 16px;
  color: #000;
`;

const ListContainer = styled(View)`
  padding: 16px;
`;

export default CheckBoxList;

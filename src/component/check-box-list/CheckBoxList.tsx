import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

interface ListItem {
	id: string;
	label: string;
	checked: boolean;
}

interface CheckBoxListProps {
	onPress: (id: string, checked: boolean) => void;
}

const CheckBoxList = ({ onPress }: CheckBoxListProps) => {
	const [items, setItems] = useState<ListItem[]>([
		{ id: '1', label: 'Bid Price  ⬆', checked: false },
		{ id: '2', label: 'Bid Price  ⬇', checked: false },
		{ id: '3', label: 'Year         ⬆', checked: false },
		{ id: '4', label: 'Year         ⬇', checked: false },
		{ id: '5', label: 'Modal      ⬆', checked: false },
		{ id: '6', label: 'Modal      ⬇', checked: false },
		{ id: '7', label: 'Petrol ', checked: false },
		{ id: '8', label: 'Diesel ', checked: false },
		{ id: '9', label: 'Favourite ', checked: false },
		{ id: '10', label: 'EngineSize ⬆', checked: false },
		{ id: '11', label: 'EngineSize ⬇', checked: false },
	]);

	const handlePress = (id: string) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		);
		const selectedItem = items.find((item) => item.id === id);
		if (selectedItem) {
			onPress(id, !selectedItem.checked);
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

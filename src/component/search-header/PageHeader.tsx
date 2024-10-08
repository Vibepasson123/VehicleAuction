import { StyleSheet } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import PulseText from '../pulse-text/PulseText';
import { PageHeaderContainer, PageHeaderTitleContainer, PageIconContainer, PageRightIconsContainer } from './styled';
import { useDispatch } from 'react-redux';
import { resetData } from '../../redux/vehiclesSlicer';
interface PageHeaderProps {
	HeaderText: string;
	istabScreen: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ HeaderText, istabScreen }) => {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	return (
		<PageHeaderContainer style={styles.headerContainer}>
			<PageRightIconsContainer >
			{!istabScreen && (
				<PageIconContainer radius={50} style={styles.iconContainer} onPress={() =>{ navigation.goBack(); dispatch(resetData());}}>
					<Icon name="arrow-back" size={24} color="white" />
				</PageIconContainer>)}
			</PageRightIconsContainer>
			<PageHeaderTitleContainer isTabScreen={istabScreen}>
				<PulseText message={HeaderText} color="white" fontSize={18} />
			</PageHeaderTitleContainer>
		</PageHeaderContainer>
	);
};
export default PageHeader;

const styles = StyleSheet.create({
	headerContainer: {
		height: '15%',
		alignItems: 'flex-start',
		padding: 30,
	},
	iconContainer: {
		top: 10,
	},
});

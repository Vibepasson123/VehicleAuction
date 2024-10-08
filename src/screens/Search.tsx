import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../component/search-header/PageHeader';
import { PageBody, Pagesection, SearchPageContainer } from '../styles/Styled';
import VaSlider from '../component/slider/VaSlider';
import VaButton from '../component/buttons/VaButton';
import CalendarPicker from 'react-native-calendar-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchPageInputContainer } from '../component/search-header/styled';
import styled from 'styled-components/native';
import colors from '../configrations/Colors';
import { useDispatch } from 'react-redux';
import { filterByBidAndPriceRange } from '../redux/vehiclesSlicer';
import { formatHumanReadableDate } from '../utils/helper';
import moment from 'moment';

const Search = () => {
  const navigation = useNavigation() as any;
  const dispatch = useDispatch();
  const [bidStartDate, setBidStartDate] = useState<string | null>(null);
  const [bidOutDate, setBidOutDate] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBidIn, setIsBidIn] = useState(true);

  const toggleModal = (isBidInDate: boolean) => {
    setIsBidIn(isBidInDate);
    setModalVisible(!isModalVisible);
  };

  const handleDateChange = (date: string) => {
    if (isBidIn) {
      setBidStartDate(date);
    } else {
      setBidOutDate(date);
    }
    setModalVisible(false);
  };

  const handleSubmit = () => {
    console.log(formatHumanReadableDate(bidStartDate),'hit');
    if (bidStartDate === null && bidOutDate === null && priceRange === 0) {
      Alert.alert('Please enter one of the field');
      return;
    }
    dispatch(filterByBidAndPriceRange({
      bidStartDate,
      bidOutDate,
      priceRange,
    }));
    navigation.navigate('VehicleSearchList');
  };

  return (
    <SearchPageContainer>
      <PageHeader istabScreen HeaderText={'Search'} />
      <PageBody>
        <Pagesection>
          <TouchableOpacityContainer width="50%" left="3px" onPress={() => toggleModal(true)}>
            <SearchPageInputContainer isFocused={false}>
              <Ionicons name="calendar-outline" size={24} color="#44403C" />
              <InputText>
                {bidStartDate ? moment(bidStartDate).format('YYYY-MM-DD') : 'Bid Start Date'}
              </InputText>
            </SearchPageInputContainer>
          </TouchableOpacityContainer>

          <TouchableOpacityContainer width="50%" left="5px" onPress={() => toggleModal(false)}>
            <SearchPageInputContainer isFocused={false}>
              <Ionicons name="calendar-outline" size={24} color="#44403C" />
              <InputText>
                {bidOutDate ? moment(bidOutDate).format('YYYY-MM-DD') : 'Bid Out Date'}
              </InputText>
            </SearchPageInputContainer>
          </TouchableOpacityContainer>
        </Pagesection>
        <Pagesection>
          <VaSlider
            minValue={0}
            maxValue={100000}
            step={10}
            currentValue={priceRange}
            onValueChange={(value) => setPriceRange(value)}
          />
        </Pagesection>
        <Pagesection>
          <VaButton title="Search" onPress={handleSubmit} />
        </Pagesection>
      </PageBody>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalBody>
            <CalendarPicker onDateChange={(val)=>handleDateChange(String(val))} />
            <CloseButton onPress={() => setModalVisible(false)}>
              <CloseButtonText>Close</CloseButtonText>
            </CloseButton>
          </ModalBody>
        </ModalContainer>
      </Modal>
    </SearchPageContainer>
  );
};


const TouchableOpacityContainer = styled(TouchableOpacity) <{ width: string; left: string }>`
  width: ${(props) => props.width};
  left: ${(props) => props.left};
`;

const InputText = styled(Text)`
  margin-left: 12px;
  font-size: 16px;
  color: #000;
`;

const ModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled(View)`
  justify-content: center;
  height:50%;
  width: 96%;
  border-radius:12px;
  align-items: center;
  background-color: white;
`;

const CloseButton = styled(TouchableOpacity)`
  margin-top: 20px;
  background-color: ${colors.primary};
  padding: 15px;
  border-radius: 8px;
`;

const CloseButtonText = styled(Text)`
  color: #fff;
  font-size: 16px;
`;

export default Search;

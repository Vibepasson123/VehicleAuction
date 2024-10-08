/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Button, StatusBar, TouchableOpacity, View } from 'react-native';

import {
  FilterContainer,
  HeaderContainer,
  IconContainer,
  RightIconsContainer,
  SearchContainer,
  SearchInput,
  SearchRow,
  SuggestionsContainer,
  SuggestionText,
} from './styled';

import { useBottomSheetControls } from '../../hooks/use-bottom-sheet-controls';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet';
import { Ionicons } from '../../configrations/VectorIcons';
import CheckBoxList from '../check-box-list/CheckBoxList';
import { useDispatch, useSelector } from 'react-redux';
import { filterVehicles, sortVehicles } from '../../redux/vehiclesSlicer'; import { Vehicle } from '../../redux/types';
;
type SortField = 'make' | 'model' | 'year' | 'order';

const SearchHeader: React.FC = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);
  const [sortOptionSheetRef, sortOptionSheetActions] = useBottomSheetControls();
  const { suggestions } = useSelector((DataState: any) => DataState.vehiclesData);


  const filterHandler = React.useCallback((val: any) => {
    sortOptionSheetActions.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (val: string) => {

    dispatch(filterVehicles(val));
    setSearchText(val);
    if (val.length >= 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const renderSuggestions = () => {
    if (!showSuggestions || suggestions?.length === 0) {
      return null;
    }
    return (
      <SuggestionsContainer>
        {suggestions?.map((suggestion: any, index: any) => (
          <TouchableOpacity
            key={index}
            onPress={(val) => {
              setShowSuggestions(false);
              dispatch(filterVehicles(suggestion as any));
            }}
          >
            <SuggestionText>{suggestion}</SuggestionText>
          </TouchableOpacity>
        ))}
      </SuggestionsContainer>
    );
  };

  return (
    <HeaderContainer>
      <SearchRow>
        <SearchContainer isFocused={isFocused}>
          <Ionicons name="search-outline" size={24} color="#44403C" />
          <SearchInput
            placeholder="Search Here"
            placeholderTextColor="#44403C"
            value={searchText}
            onChangeText={(val) => handleSearchChange(val)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </SearchContainer>
        {renderSuggestions()}
        <RightIconsContainer>
          <IconContainer onPress={sortOptionSheetActions.show}>
            <Ionicons name="options-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </SearchRow>
      <BottomSheetComponent ref={sortOptionSheetRef} >
        <FilterContainer>
          <CheckBoxList
            onPress={(val, checked) => {
              if (val && val.field && val.order) {
                dispatch(sortVehicles({ field: val.field as keyof Vehicle, order: val.order as any }));
                sortOptionSheetActions.close();
              }
            }}
          />
        </FilterContainer>
      </BottomSheetComponent>
    </HeaderContainer>
  );
};

export default SearchHeader;

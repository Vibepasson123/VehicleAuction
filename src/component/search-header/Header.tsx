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


const SearchHeader: React.FC = () => {
  const { searchText, suggestions, handleSearchChange } = [] as any;
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);
  const [sortOptionSheetRef, sortOptionSheetActions] = useBottomSheetControls();

  const filterHandler = React.useCallback((val: any) => {
    console.log(val);
    sortOptionSheetActions.close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



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
              console.log(val);
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
            value={searchText || ''}
            onChangeText={(val) => {
              console.log(val);
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </SearchContainer>
        {2 + 2 === 5 ? renderSuggestions() : null}
        <RightIconsContainer>
          <IconContainer onPress={sortOptionSheetActions.show}>
            <Ionicons name="options-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </SearchRow>
      <BottomSheetComponent ref={sortOptionSheetRef} >
        <FilterContainer>
          <CheckBoxList onPress={(val) => filterHandler(val)} />
        </FilterContainer>
      </BottomSheetComponent>
    </HeaderContainer>
  );
};

export default SearchHeader;

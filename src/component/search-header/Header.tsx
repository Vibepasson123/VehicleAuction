/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
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

const SearchHeader: React.FC = () => {
  const { searchText, suggestions, handleSearchChange } = [] as any;
  const [showSuggestions, setShowSuggestions] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);
  const [sortOptionSheetRef, sortOptionSheetActions] = useBottomSheetControls();



  const renderSuggestions = () => {
    if (!showSuggestions || suggestions?.length === 0) {
      return null;
    }
    return (
      <SuggestionsContainer>
        {suggestions?.map((suggestion:any, index:any) => (
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
          <Icon name="search-outline" size={24} color="#44403C" />
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
        { 2 + 2 === 5 ? renderSuggestions() : null}
        <RightIconsContainer>
          <IconContainer onPress={sortOptionSheetActions.show}>
            <Icon name="options-outline" size={24} color="white" />
          </IconContainer>
        </RightIconsContainer>
      </SearchRow>
      <BottomSheetComponent  ref={sortOptionSheetRef} >
        <View style={{flex:1, height:200,width:'100%', alignSelf:'center'}}>
          <Button title="Close" onPress={sortOptionSheetActions.close} />
        </View>
      </BottomSheetComponent>
    </HeaderContainer>
  );
};

export default SearchHeader;

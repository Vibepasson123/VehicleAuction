import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width: screenWidth } = Dimensions.get('window');

interface IconContainerProps {
    radius?: number;
    backgroundColor?: string;
  }
  interface SearchContainerProps {
    isFocused: boolean;
  }

export const HeaderContainer = styled.View`
  background-color: #2563EB;
  padding: 20px;
  height:18%;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  shadow-color: rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 9px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
  elevation: 5;
  z-index:10;
`;
export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const LocationRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocationText = styled.Text`
  color: white;
  font-size: 14px;
  margin-left: 6px;
`;

export const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  background-color: ${(props) => props.backgroundColor || 'rgba(255, 255, 255, 0.2)'};
  padding: 8px;
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '10px')};
`;

export const SearchContainer = styled.View<SearchContainerProps>`
  width: 85%;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) => (props.isFocused ? 'gray' : '#ccc')};
  padding: 10px;
  border-radius: 25px;
  background-color: #fff;
  shadow-color: ${(props) => (props.isFocused ? 'gray' : 'transparent')};
  shadow-offset: 0px 2px;
  shadow-opacity: ${(props) => (props.isFocused ? 0.8 : 0)};
  shadow-radius: 3px;
  elevation: 5;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  font-color: #44403C;
  
`;

export const RightIconsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SuggestionsContainer = styled.View`
  background-color: white;
  border-radius: 10px;
  elevation: 3;
  margin-top: 5px;
  padding: 10px;
  z-index: 1000;
  width: ${screenWidth * 0.85}px;
  position: absolute;
  top: 50px;
`;

export const SuggestionText = styled.Text`
  padding-vertical: 10px;
  padding-horizontal: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
  font-size: 16px;
`;

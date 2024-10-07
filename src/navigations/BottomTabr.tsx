import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  TouchableOpacity } from 'react-native';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Fontisto';
import Home from '../screens/Home';
import Search from '../screens/Search';
import { BottomTabItem, BottomTabLabel, TabBarContainer } from '../styles/Styled';
import { capitalizeFirstChar } from '../utils/helper';

const Tab = createBottomTabNavigator();

interface BottomTabBarProps {
  navigation: any;
}

const BottomTabBar: React.FC<BottomTabBarProps> = () => {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator tabBar={(props) => <TabBar {...props} /> } >
      <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="search"  component={Search} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

interface TabBarProps {
  state: any;
  navigation: any;
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation }) => {
  const [selected, setSelected] = useState('home');
  const { routes } = state;

  const renderColor = (currentTab: string): string => (currentTab === selected ? 'white' : '#154341');
  const activeState = (currentTab: string): boolean => currentTab === selected;

  const handlePress = (activePath: string, index: number) => {
    if (state.index !== index) {
      setSelected(activePath);
      navigation.navigate(activePath);
    }
  };

  return (
    <TabBarContainer>
      {routes.map((route: any, index: number) => (
        <TabContent
          key={route.key}
          tab={route}
          color={renderColor(route.name)}
          navState={activeState(route.name)}
          onPress={() => handlePress(route.name, index)}
        />
      ))}
    </TabBarContainer>
  );
};
interface TabContentProps {
  color: string;
  tab: any;
  navState: boolean;
  onPress: () => void;
}

const TabContent: React.FC<TabContentProps> = ({ color, tab, onPress, navState }) => {
  let iconName: string = '';
  switch (tab.name?.toLowerCase()) {
    case 'home':
      iconName = 'home';
      break;
    case 'search':
      iconName = 'search';
      break;
    default:
      iconName = '';
      break;
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: navState ? withTiming('#60A5FA') : withTiming('transparent'),
      width: navState ? withTiming(95) : withTiming(30),
    };
  });

  const labelStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(navState ? 1 : 0),
      transform: [
        {
          translateX: withTiming(navState ? 0 : 170),
        },
      ],
    };
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <BottomTabItem style={ animatedStyle}>
        <Icon name={iconName} size={23} color={navState ? color : 'white'} />
        <BottomTabLabel style={labelStyle}>
          {capitalizeFirstChar(navState ? tab.name : undefined) }
        </BottomTabLabel>
      </BottomTabItem>
    </TouchableOpacity>
  );
};

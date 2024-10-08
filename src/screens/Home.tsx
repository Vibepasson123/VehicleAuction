
import React from 'react';
import SearchHeader from '../component/search-header/Header';
import { Container } from '../styles/Styled';
import { StatusBar } from 'react-native';
import List from './List';

const Home = () => {

  return (
    <Container>
       <StatusBar  backgroundColor="#2563EB" barStyle="light-content" />
      <SearchHeader/>
      <List/>
    </Container>
  );
};


export default Home;

import React from 'react';
import { SearchPageContainer } from '../styles/Styled';
import PageHeader from '../component/search-header/PageHeader';
import List from './List';

const ListView: React.FC = () => {
    return (
        <SearchPageContainer>
            <PageHeader istabScreen={false} HeaderText={'Search Result'} />
            <List/>
        </SearchPageContainer>
    );
};

export default ListView;

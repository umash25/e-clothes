import styled from 'styled-components';
import CollectionItem from '../../components/collection-item/collection-item';

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CollectionsDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 800px) {
       grid-template-columns: 1fr 1fr;
    }
`;

export const ItemDiv = styled(CollectionItem)`
    margin-bottom: 30px;
`;
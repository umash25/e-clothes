import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import { CollectionContainer, CollectionsDiv, ItemDiv, TitleContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <CollectionsDiv>
                {
                    items.map((item) => (
                        <ItemDiv
                            key={item.id}
                            item={item} />
                    ))
                }
            </CollectionsDiv>
        </CollectionContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
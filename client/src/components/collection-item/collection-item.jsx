import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action.js';
import {
    CollectionItemContainer,
    CustomButtonContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameSpan,
    PriceSpan
} from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer className="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameSpan>{name} </NameSpan>
                <PriceSpan>${price} </PriceSpan>
            </CollectionFooterContainer>
            <CustomButtonContainer
                className="button"
                inverted
                onClick={() => addItem(item)}>
                ADD TO CART
            </CustomButtonContainer>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
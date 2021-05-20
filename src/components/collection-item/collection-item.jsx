import React from 'react';
import CustomButton from '../custom-button/custom-button.jsx';
import { connect } from 'react-redux';
import './collection-item.scss'
import { addItem } from '../../redux/cart/cart.action.js';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name} </span>
                <span className="price">${price} </span>
            </div>
            <CustomButton inverted
                onClick={() => addItem(item)}
            >
                ADD TO CART
        </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
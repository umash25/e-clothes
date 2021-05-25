import React from 'react';

import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.jsx'

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title"><a href={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</a></h1>
        <div className="preview">
            {
                items.filter((items, i) => (i < 4)).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;
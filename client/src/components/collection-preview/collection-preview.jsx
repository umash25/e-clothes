import React from 'react';

import CollectionItem from '../collection-item/collection-item.jsx'
import { PreviewContainer, TitleContainer, PreviewDiv } from './collection-preview.styles.jsx';

const CollectionPreview = ({ title, items }) => (
    <PreviewContainer>
        <TitleContainer><a href={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</a></TitleContainer>
        <PreviewDiv>
            {
                items.filter((items, i) => (i < 4)).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewDiv>
    </PreviewContainer>
)

export default CollectionPreview;
import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContentContainer, ImageContainer, MenuItemContainer, SubtitleSpan, TitleContainer } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
    <MenuItemContainer size={size} onClick={() => (
        history.push(`${match.url}${linkUrl}`)
    )}>
        <ImageContainer className='image' imageUrl={imageUrl} ></ImageContainer>
        <ContentContainer className='content'>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>
            <SubtitleSpan>BUY NOW</SubtitleSpan>
        </ContentContainer>
    </MenuItemContainer >
)

export default withRouter(MenuItem);
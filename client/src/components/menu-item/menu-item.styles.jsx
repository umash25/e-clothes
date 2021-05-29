import styled from 'styled-components';

export const MenuItemContainer = styled.div`
    height: ${({ size }) => (size ? '380px' : '240px')};
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &: hover{
        cursor: pointer;

        & .image{
            transform: scale(1.1);
            transition: transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        & .content {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }
    
    &:last-child {
        margin-left: 7.5px;
    }
      
    @media screen and (max-width: 800px){
        height: 200px;  
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ContentContainer = styled.div`
    height: 100px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const SubtitleSpan = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;
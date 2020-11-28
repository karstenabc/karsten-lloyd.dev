import styled from 'styled-components'


export const TitleContainer = styled.div`
    background-color: #3B9BD3;
    text-align: center;
    border-radius: 25px;
    padding: 50px;
`;

export const Title = styled.h1`
    color: #FFF;
    font-family: quicksand;
    font-size: 3em;
    font-weight: 100;
`;

export const SubTitle = styled.h2`
    color: #FFF;
    font-family: firecode;
    font-size: 2em;
    font-weight: 100;
    text-transform: uppercase;
`;

export const Divider = styled.div`
    background-color: #FFF;
    border-radius: 10px;
    height: 2px;
    width: 50%;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;    
`;


export const ContactContainer = styled.div`
    color: #FFF;
    background-color: #3B9BD3;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    & p {
        margin: 0px;
    }
    &:hover {
        color: #3B9BD3;
        background-color: #FFF;
        border: 2px solid #3B9BD3;
    }
`;
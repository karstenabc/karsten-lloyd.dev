import styled from 'styled-components';

export const TitleContainer = styled.div`
  background-color: #3b9bd3;
  text-align: center;
  border-radius: 25px;
  padding: 50px;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: quicksand;
  font-size: 3em;
  font-weight: 100;
`;

export const SubTitle = styled.h2`
  color: #fff;
  font-family: firecode;
  font-size: 2em;
  font-weight: 100;
  text-transform: uppercase;
`;

export const Divider = styled.div`
  background-color: #fff;
  border-radius: 10px;
  height: 2px;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ContactContainer = styled.div`
  color: #fff;
  background-color: #3b9bd3;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  & p {
    margin: 0px;
  }
  &:hover {
    color: #3b9bd3;
    background-color: #fff;
    border: 2px solid #3b9bd3;
  }
`;

import styled, { createGlobalStyle } from 'styled-components';

export const orangeColor = '#FB8F3D',
  blackColor = '#040404',
  grayColor = '#dddddd';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  padding: 5px
}
   
a {
    text-decoration: none;
    color: ${blackColor};
    padding: 0; 
    margin: 0;
}
`;

export const Title = styled.h1`
  color: ${blackColor};
  font-weight: bold;
  font-size: 40px;
  @media (max-width: 460px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h3`
  color: ${orangeColor};
  font-weight: regular;
  font-size: 15px;
`;

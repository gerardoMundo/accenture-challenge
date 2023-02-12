import styled from 'styled-components';
import { grayColor } from '../styles';

export const NavBarContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    align-items: center;
    flex: 1;
    li {
      border: 1px solid ${grayColor};
      padding: 10px;
      display: flex;
      justify-content: center;
      flex: 1;
      &:hover {
        background-color: ${grayColor};
        cursor: pointer;
      }
    }
  }

  @media (max-width: 460px) {
    font-size: 15px;
    max-width: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

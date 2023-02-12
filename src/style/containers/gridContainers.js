import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

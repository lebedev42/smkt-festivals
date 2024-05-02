import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #ffffff;
  padding: 18px;

  @media (max-width: 475px) {
    padding: 10px;
  }
  @media (max-width: 360px) {
    padding: 5px;
  }
`;

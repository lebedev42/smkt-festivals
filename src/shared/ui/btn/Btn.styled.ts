import styled from 'styled-components';

export const Btn = styled.button<{ typeBtn: 'white' | 'red' }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  background: #ff335f;

  background: ${(props) => (props.typeBtn === 'white' ? '#FFFFFF' : '#ff335f')};
  color: ${(props) => (props.typeBtn === 'white' ? '#000000' : '#FFFFFF')};
  border: ${(props) =>
    props.typeBtn === 'white' ? '1px solid #000000' : 'none'};

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: center;

  font-size: 32px;
  padding: 30px 90px;
  border-radius: 50px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    background: #b6b6b6;
    cursor: not-allowed;
  }

  @media (max-width: 475px) {
    font-size: 22px;
    padding: 20px 40px;
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    font-size: 18px;
    padding: 15px 30px;
    border-radius: 30px;
  }
`;

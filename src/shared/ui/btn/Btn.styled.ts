import styled from 'styled-components';

export const Btn = styled.button<{ typeBtn: 'white' | 'red' }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  padding: 28.5714px 89.2857px;
  gap: 17.86px;

  background: #ff335f;
  border-radius: 50px;

  background: ${(props) => (props.typeBtn === 'white' ? '#FFFFFF' : '#ff335f')};
  color: ${(props) => (props.typeBtn === 'white' ? '#000000' : '#FFFFFF')};

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 43px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    background: #b6b6b6;
    cursor: not-allowed;
  }
`;

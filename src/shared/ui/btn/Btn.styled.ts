import styled from 'styled-components';

export const Btn = styled.button<{
  typeBtn: 'white' | 'red' | 'white-full';
  size: 'small' | 'big';
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;

  background: #ff335f;

  background: ${(props) =>
    props.typeBtn === 'white' || props.typeBtn === 'white-full'
      ? '#FFFFFF'
      : '#ff335f'};
  color: ${(props) =>
    props.typeBtn === 'white' || props.typeBtn === 'white-full'
      ? '#000000'
      : '#FFFFFF'};
  border: ${(props) => {
    switch (props.typeBtn) {
      case 'white':
        return '1px solid #000000';
      case 'red':
        return 'none';
      default:
        return 'none';
    }
  }};

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: center;

  font-size: ${(props) => (props.size === 'big' ? '32px' : '20px')};
  padding: ${(props) => (props.size === 'big' ? '30px 90px' : '15px 40px')};
  border-radius: ${(props) => (props.size === 'big' ? '50px' : '40px')};
  width: 100%;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    background: #b6b6b6;
    cursor: not-allowed;
  }

  @media (max-width: 475px) {
    font-size: 20px;
    padding: 15px 40px;
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 30px;
  }
`;

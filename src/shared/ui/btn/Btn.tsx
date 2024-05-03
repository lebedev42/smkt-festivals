import React from 'react';
import * as Styled from './Btn.styled';

type BtnProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  type: 'white' | 'red' | 'white-full';
  size?: 'small' | 'big';
};

export const Btn: React.FC<BtnProps> = (props) => {
  const { label, disabled, onClick, type, size = 'big' } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <Styled.Btn
      size={size}
      onClick={handleClick}
      className={disabled ? 'disabled' : ''}
      typeBtn={type}
    >
      {props.label}
    </Styled.Btn>
  );
};

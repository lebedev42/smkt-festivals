import React from 'react';

import { CrossIcon } from '../icons/cross-icon';

import * as Styled from './BtnClose.styled';

type BtnCloseProps = {
  onClick: () => void;
};

export const BtnClose: React.FC<BtnCloseProps> = (props) => {
  const { onClick } = props;

  return (
    <Styled.Container onClick={onClick}>
      <CrossIcon width={30} height={30} />
    </Styled.Container>
  );
};

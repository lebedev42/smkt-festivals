import React, { useLayoutEffect, useState } from 'react';

import { BtnClose } from '../../shared/ui/btn-close';
import { useWindowSize } from 'usehooks-ts';
import { Btn } from '../../shared/ui/btn';

import * as Styled from './Welcome.styled';
import clsx from 'clsx';

type WelcomeProps = {
  type: 'festival' | 'track';
  onClick: () => void;
  children: React.ReactNode;
};

export const Welcome: React.FC<WelcomeProps> = (props) => {
  const { type, onClick, children } = props;

  const { width = 0 } = useWindowSize();

  const [containerHeight, setContainerHeight] = useState(0);

  useLayoutEffect(() => {
    const containerHeight = (width * 706) / 512;

    setContainerHeight(containerHeight);
  }, [width]);

  const [rulesOpen, setRulesOpen] = useState(false);

  const handleStartGame = () => {
    console.error('');
    onClick();
  };

  const handleCloseGame = () => {
    console.error('');
  };

  return (
    <Styled.Wrapper>
      <Styled.Container type={type} height={containerHeight}>
        <Styled.RulesBackdrop className={clsx({ active: rulesOpen })} />
        <Styled.CloseBtn>
          <BtnClose onClick={handleCloseGame} />
        </Styled.CloseBtn>
        <Styled.RulesLink onClick={() => setRulesOpen(true)}>
          как играть?
        </Styled.RulesLink>
        <Styled.Rules className={clsx({ open: rulesOpen })}>
          <Styled.RulesTitle>Как играть?</Styled.RulesTitle>
          <Styled.RulesText>{children}</Styled.RulesText>
        </Styled.Rules>
      </Styled.Container>
      {rulesOpen ? (
        <Btn
          label="Все понятно"
          onClick={() => setRulesOpen(false)}
          type="red"
        />
      ) : (
        <Btn label="Начать игру" onClick={handleStartGame} type="red" />
      )}
    </Styled.Wrapper>
  );
};

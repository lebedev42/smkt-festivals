import React from 'react';

import { GameProvider } from '../../entities/game';
import { Welcome } from '../../widgets/welcome';

import { useWindowSize } from '@uidotdev/usehooks';

import * as Styled from './Festival.styled';

const Festival = () => {
  const { width, height } = useWindowSize();

  const handleCloseGame = () => {
    console.error('close');
  };

  return (
    <GameProvider>
      <Styled.Content>
        <Welcome type="festival" onClick={handleCloseGame}>
          <p>
            Каждый из персонажей хочет зайти в определённый павильон. Попробуйте
            угадать, какой. Перетащите иконки в правильные места.
          </p>
        </Welcome>
        <Styled.Size>
          {width} {height}
        </Styled.Size>
      </Styled.Content>
    </GameProvider>
  );
};

export default Festival;

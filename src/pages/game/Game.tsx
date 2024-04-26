import React, { useState } from 'react';

import { GameProvider } from '../../entities/game';
import { Welcome } from '../../widgets/welcome';

import { useWindowSize } from '@uidotdev/usehooks';
import { Game as GameWidget } from '../../widgets/game';
import { BtnClose } from '../../shared/ui/btn-close';

import * as Styled from './Game.styled';

const Game = () => {
  const { width, height } = useWindowSize();

  const [gameStarted, setGameStarted] = useState(false);

  const handleCloseGame = () => {
    setGameStarted(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <GameProvider>
      <Styled.Content>
        {gameStarted ? (
          <Styled.GameWrapper>
            <Styled.CloseBtn>
              <BtnClose onClick={handleCloseGame} />
            </Styled.CloseBtn>
            <GameWidget />
          </Styled.GameWrapper>
        ) : (
          <Welcome type="track" onClick={handleStartGame}>
            <p>
              <p>1. Перемещайтесь по карте города и собирайте бонусы</p>
              <p>2. Избегайте препятствия</p>
              <p>
                3. Подъезжайте к точкам с покупателями, чтобы фудтрак стал
                неуязвимым на некоторое время.
              </p>
            </p>
          </Welcome>
        )}
        {/* <Welcome type="festival">
          <p>
            Каждый из персонажей хочет зайти в определённый павильон. Попробуйте
            угадать, какой. Перетащите иконки в правильные места.
          </p>
        </Welcome> */}
        <Styled.Size>
          {width} {height}
        </Styled.Size>
      </Styled.Content>
    </GameProvider>
  );
};

export default Game;

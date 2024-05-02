import React, { useState } from 'react';
import clsx from 'clsx';

import { useGame } from '../../entities/game';
import { Welcome } from '../../widgets/welcome';

import { useWindowSize } from '@uidotdev/usehooks';
import { Game as GameWidget } from '../../widgets/game';
import { BtnClose } from '../../shared/ui/btn-close';

import { Btn } from '../../shared/ui/btn';

import * as Styled from './Game.styled';

const Game = () => {
  const { width, height } = useWindowSize();
  const { data } = useGame();

  const [gameStarted, setGameStarted] = useState(true);
  const [gameFinished, setGameFinished] = useState(false);

  const [points, setPoints] = useState(0);

  const handleCloseGame = () => {
    setGameStarted(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    setGameFinished(false);

    if (data?.game) {
      data.game.startButtonClick();
    }
  };

  const handleGameFinished = (points: number) => {
    setGameFinished(true);
    setPoints(points);
  };

  return (
    <Styled.Content>
      {gameStarted ? (
        <Styled.GameWrapper>
          <Styled.ResultsBackdrop className={clsx({ active: gameFinished })} />
          <Styled.CloseBtn>
            <BtnClose onClick={handleCloseGame} />
          </Styled.CloseBtn>
          <GameWidget handleGameFinished={handleGameFinished} />
          <Styled.Results className={clsx({ active: gameFinished })}>
            <Styled.ResultTitle>
              Ваш счёт: <span>{points}</span>
            </Styled.ResultTitle>
            <Styled.ResultDescription>
              {points > 200 ? (
                <p>
                  Вы классно справились! <br />
                  Вернитесь в чат-бот — поделимся секретным кодом.
                </p>
              ) : (
                <p>
                  Вы почти у цели! Чтобы получить приз, соберите 300 бонусов.
                </p>
              )}
            </Styled.ResultDescription>
            <Styled.ResultActions>
              {points > 200 ? (
                <Btn label="В чат-бот" onClick={handleStartGame} type="red" />
              ) : (
                <>
                  <Btn
                    label="Играть ещё"
                    onClick={handleStartGame}
                    type="red"
                  />
                  <Btn
                    label="В чат-бот"
                    onClick={handleStartGame}
                    type="white"
                  />
                </>
              )}
            </Styled.ResultActions>
          </Styled.Results>
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
      <Styled.Size>
        {width} {height}
      </Styled.Size>
    </Styled.Content>
  );
};

export default Game;

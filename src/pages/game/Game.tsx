import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { useGame } from '../../entities/game';
import { Welcome } from '../../widgets/welcome';

import { Game as GameWidget } from '../../widgets/game';
import { BtnClose } from '../../shared/ui/btn-close';

import { Btn } from '../../shared/ui/btn';

import * as Styled from './Game.styled';

const Game = () => {
  const { data } = useGame();

  useEffect(() => {
    window.Telegram.WebApp.expand();
  }, []);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const [points, setPoints] = useState(0);

  const handleCloseGame = () => {
    setGameStarted(false);

    if (window.Telegram) {
      window.Telegram.WebApp.close();
    }
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
          <GameWidget
            handleGameFinished={handleGameFinished}
            isTopbar={!gameFinished}
          />
          <Styled.Results className={clsx({ active: gameFinished })}>
            <Styled.ResultTitle>
              Ваш счёт: <span>{points}</span>
            </Styled.ResultTitle>
            <Styled.ResultDescription>
              {points >= 150 ? (
                <p>
                  Вы классно справились! <br />
                  Вернитесь в чат-бот — поделимся секретным кодом.
                </p>
              ) : (
                <p>
                  Вы почти у цели! Чтобы получить приз, соберите 150 бонусов.
                </p>
              )}
            </Styled.ResultDescription>
            <Styled.ResultActions>
              {points >= 150 ? (
                <Btn label="В чат-бот" onClick={handleCloseGame} type="red" />
              ) : (
                <>
                  <Btn
                    label="Играть ещё"
                    onClick={handleStartGame}
                    type="red"
                  />
                  <Btn
                    label="В чат-бот"
                    onClick={handleCloseGame}
                    type="white"
                  />
                </>
              )}
            </Styled.ResultActions>
          </Styled.Results>
        </Styled.GameWrapper>
      ) : (
        <Welcome type="track" onClick={handleStartGame}>
          <img src="/track-rules.png" alt="" />
        </Welcome>
      )}
    </Styled.Content>
  );
};

export default Game;

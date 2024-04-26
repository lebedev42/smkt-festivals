import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import clsx from 'clsx';

import { useGame } from '../../entities/game';

import { useGameMutation } from '../../entities/game/api';
import { GameResultResponse } from '../../entities/game/api/types';
import { GameCoordinator } from './api';

import * as Styled from './Game.styled';

export const Game: React.FC = () => {
  const {
    data,
    updateGame,
    updateStart,
    updateRules,
    updateGameOver,
    updateResult,
    updatePause,
  } = useGame();

  // const { useSendGameResult } = useGameMutation();

  const { width = 0 } = useWindowSize();

  const [positionTop, setPositionTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoomValue, setZoomValue] = useState(0);

  const handleGameOver = (data: any) => {
    updateStart(false);
    updateGameOver(true);

    const points = Math.ceil(data.detail.points);

    console.error('points', points);
    // useSendGameResult(
    //   { points },
    //   {
    //     onSuccess: (response: GameResultResponse) => {
    //       updateResult({
    //         discount: response.discount,
    //         product: response.product,
    //       });
    //     },
    //   },
    // );
  };

  const removeEventListener = () => {
    window.removeEventListener('gameOver', handleGameOver);
  };

  useEffect(() => {
    window.addEventListener('gameOver', handleGameOver);

    return () => {
      removeEventListener();
    };
  }, []);

  useLayoutEffect(() => {
    if (!data.game) {
      const game = new GameCoordinator();

      updateGame(game);

      updateStart(true);

      game?.startButtonClick();
    }

    const positionTop = 0;

    // ширина контейнера - 475
    // при ширине контейнера в 475 - ширина поля игры - 398
    // при ширине контейнера в 475 - высота поля игры - 439

    const containerWidth = (width * 398) / 475;
    const containerHeight = (width * 439) / 475;
    // const containerWidthPadding = (width * 15) / 475;

    setPositionTop(positionTop);
    setContainerHeight(containerHeight);
    setContainerWidth(containerWidth);

    const zoomValue = containerWidth / 448;
    // const zoomValue = (containerWidth - containerWidthPadding) / 448;

    setZoomValue(zoomValue);
  }, [width]);

  return (
    <Styled.Container id="game-container">
      <Styled.TopBar width={containerWidth}>
        <div id="extra-lives" className="extraLives"></div>
        <div id="fps-display" className="fpsDisplay"></div>
        <div className="pointsDisplay">
          Счет: <span id="points-display">0</span>
        </div>
      </Styled.TopBar>

      <Styled.GameWrapper
        width={containerWidth}
        height={containerHeight}
        zoom={zoomValue}
      >
        <div id="game-ui" className="gameUi">
          <div id="maze" className="maze">
            <img id="maze-img" className="maze-img" src="maze.svg" />
            <div id="maze-cover" className="maze-cover"></div>
            <div id="dot-container"></div>
            <p id="pacman" className="pacman"></p>
            <p id="clyde" className="ghost"></p>
            <p id="inky" className="ghost"></p>
            <p id="pinky" className="ghost"></p>
            <p id="blinky" className="ghost"></p>
          </div>
        </div>
      </Styled.GameWrapper>

      <Styled.MovementButtons id="movement-buttons">
        <div className="row">
          <button id="button-up" className="btn button-up"></button>
        </div>
        <div className="row">
          <button id="button-left" className="btn button-left"></button>
          <button id="button-down" className="btn button-down"></button>
          <button id="button-right" className="btn button-right"></button>
        </div>
      </Styled.MovementButtons>
    </Styled.Container>
  );
};

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { GameCoordinator } from '../../../widgets/game/api';

interface GameContext {
  game: GameCoordinator | null;
  gameStarted: boolean;
  gameOver: boolean;
  rules: boolean;
  result: any;
  paused: boolean;
  firstStart: boolean;
}

const gameContext = createContext<{
  data: GameContext;
  setData: Dispatch<SetStateAction<GameContext>>;
} | null>(null);

export function GameDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<GameContext>({
    game: null,
    gameStarted: false,
    gameOver: false,
    rules: false,
    result: null,
    paused: false,
    firstStart: true,
  });

  return (
    <gameContext.Provider value={useMemo(() => ({ data, setData }), [data])}>
      {children}
    </gameContext.Provider>
  );
}

export function useGame() {
  const contextValue = useContext(gameContext);

  if (!contextValue) throw new Error('context not provided');

  const { data, setData } = contextValue;

  const updateGame = (game: any) => {
    setData((d: any) => ({ ...d, game }));
  };
  const updateStart = (gameStarted: any) => {
    setData((d: any) => ({ ...d, gameStarted }));
  };
  const updateGameOver = (gameOver: any) => {
    setData((d: any) => ({ ...d, gameOver }));
  };
  const updateRules = (rules: any) => {
    setData((d: any) => ({ ...d, rules }));
  };
  const updateResult = (result: any) => {
    setData((d: any) => ({ ...d, result }));
  };
  const updatePause = (paused: any) => {
    setData((d: any) => ({ ...d, paused }));
  };
  const updateFirstStart = (firstStart: any) => {
    setData((d: any) => ({ ...d, firstStart }));
  };

  return {
    data,
    updateGame,
    updateStart,
    updateGameOver,
    updateRules,
    updateResult,
    updatePause,
    updateFirstStart,
  };
}

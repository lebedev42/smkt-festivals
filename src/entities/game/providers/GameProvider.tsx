import { ReactNode } from 'react';
import { GameDataProvider } from '../context/game';

export function GameProvider({ children }: { children: ReactNode }) {
  return <GameDataProvider>{children}</GameDataProvider>;
}

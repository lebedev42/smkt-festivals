import React from 'react';

import { GameProvider } from '../../../entities/game';
import * as Styled from './MainLayout.styled';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <GameProvider>
    <Styled.Container>{children}</Styled.Container>
  </GameProvider>
);

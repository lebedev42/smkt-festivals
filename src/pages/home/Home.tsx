import React from 'react';

import { GameProvider } from '../../entities/game';

import * as Styled from './Home.styled';

const Home = () => {
  return (
    <GameProvider>
      <Styled.Content>Home</Styled.Content>
    </GameProvider>
  );
};

export default Home;

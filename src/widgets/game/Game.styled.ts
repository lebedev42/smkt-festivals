import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 15px 0;

  .fpsDisplay {
    display: none;

    font-family: 'Euclid';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  .pointsDisplay {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Euclid';
    font-style: normal;
    font-weight: 500;
    font-size: 27.985px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #ffffff;

    span {
      padding-left: 5px;
    }
  }

  .extraLives {
    display: flex;
    align-items: center;

    gap: 2px;

    img {
      width: 38px;
      height: 35px;
    }
  }
`;

export const GameWrapper = styled.div<{
  width: number;
  height: number;
  zoom: number;
}>`
  width: ${({ width }) => width || 638}px;
  height: ${({ height }) => height || 718}px;
  margin-bottom: 40px;

  @media (max-width: 360px) {
    margin-bottom: 30px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &.disabled {
    display: none;
  }

  .gameUi {
    transform: ${({ zoom }) => `scale(${zoom})` || 'scale(1)'};
    z-index: 10;

    &.disabled {
      display: none;
    }
  }

  .ghost {
    margin: 0;
    position: absolute;
    z-index: 2;
  }

  .maze {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: ${({ height }) => height || 718}px;
  }

  .maze-img {
    user-select: none;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .maze-row {
    display: flex;
  }

  .dot-container {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .pacman {
    margin: 0;
    position: absolute;
    z-index: 1;
    transform: scale(1.2, 1.2);
  }

  .power-pellet,
  .ghost {
    animation: zoom-in-zoom-out 1s ease infinite;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

export const MovementButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .row {
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 20px;
    margin-bottom: 24px;

    @media (max-width: 360px) {
      gap: 10px;
      margin-bottom: 10px;
    }
  }

  .btn {
    border: none;
    background-color: transparent;

    width: 86px;
    height: 86px;
    background-repeat: no-repeat;
    background-size: contain;

    &.button-up {
      background-image: url('/upBtn.svg');
    }
    &.button-down {
      background-image: url('/downBtn.svg');
    }
    &.button-left {
      background-image: url('/leftBtn.svg');
    }
    &.button-right {
      background-image: url('/rightBtn.svg');
    }

    @media (max-width: 360px) {
      width: 62px;
      height: 62px;
    }
  }
`;

import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

export const GameWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: #ff335f;
  border-radius: 40px;

  padding: 80px 0 0;

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    border-radius: 30px;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Size = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultsBackdrop = styled.div`
  background: linear-gradient(
      180.03deg,
      rgba(255, 255, 255, 0.4) 0.02%,
      rgba(255, 75, 114, 0.4) 99.98%
    ),
    #eede9d;

  width: 100%;
  height: 100%;
  opacity: 0.5;

  display: none;

  &.active {
    display: block;
    z-index: 20;
    position: absolute;
    top: 0;
  }

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    border-radius: 30px 30px 0 0;
  }
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  overflow: hidden;

  position: absolute;
  left: 0;
  opacity: 0;
  bottom: -500px;

  width: 100%;
  height: 350px;

  background: #ffffff;
  border-radius: 40px;
  transition: bottom 0.5s ease-out;

  display: none;

  &.active {
    display: flex;
    bottom: -1px;
    opacity: 1;
    z-index: 99;
    transition: bottom 0.5s ease-out;
  }

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    height: 280px;
    border-radius: 30px 30px 0 0;
  }
`;

export const ResultTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 38px;

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #171717;

  span {
    padding-left: 5px;
  }

  @media (max-width: 475px) {
    margin: 20px;
  }
  @media (max-width: 380px) {
  }
  @media (max-width: 320px) {
    margin: 15px;
  }
`;

export const ResultDescription = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #171717;

  p {
    margin: 0;
    padding: 0;
  }

  margin-bottom: 30px;

  @media (max-width: 475px) {
    padding: 0 24px;
  }
  @media (max-width: 380px) {
    padding: 0 15px;
  }
  @media (max-width: 320px) {
  }
`;

export const ResultActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

import styled from 'styled-components';

export const Wrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: ${({ isSelected }) => (isSelected ? '#DEDEDE' : '#eede9d')};
  border-radius: 40px;

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
  z-index: 99;
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

export const Container = styled.div<{
  width: number;
  height: number;
  selectedStage: string;
}>`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /* height: ${({ height }) => height}px; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 320px) {
    height: 550px;
  }

  height: 100vh;
  background-size: cover;

  /* background-size: contain; */
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ selectedStage }) => {
    switch (selectedStage) {
      case 'stage-1':
        return `url('/stage-1.svg')`;
      case 'stage-2':
        return `url('/stage-2.svg')`;
      case 'stage-3':
        return `url('/stage-3.svg')`;
      case 'stage-4':
        return `url('/stage-4.svg')`;
      case 'stage-5':
        return `url('/stage-5.svg')`;
      case 'stage-6':
        return `url('/stage-6.svg')`;
      case 'stage-7':
        return `url('/stage-7.svg')`;
      case 'stage-8':
        return `url('/stage-8.svg')`;
      default:
        return `url('/places-full.svg')`;
    }
  }};
`;

export const Stages = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100%;

  @media (max-width: 380px) {
    top: 130px;
  }
  @media (max-width: 320px) {
    top: 160px;
  }
`;

export const StageRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StageItem = styled.div`
  width: 100%;
  height: 150px;

  @media (max-width: 381px) {
    height: 115px;
  }
  @media (max-width: 320px) {
    height: 100px;
  }
`;

export const Persons = styled.div`
  width: 100%;
  height: 100px;

  position: absolute;
  left: 0;
  bottom: 0;

  padding-left: 15px;

  display: flex;
  align-items: center;
  gap: 10px;

  background-color: #eeecec;
  overflow: hidden;

  &.disabled {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: gray; /* IE 6-9 */

    pointer-events: none;
  }

  .flickingScroll {
    display: flex;
    flex-direction: column;
  }

  .flicking-camera {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 10px;
  }

  @media (max-width: 320px) {
    padding: 0 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  position: absolute;
  left: 0;
  bottom: 100px;

  width: 100%;

  padding: 15px;

  background: #ff335f;
  border-radius: 20px 20px 0 0;
`;

export const InfoTitle = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  color: #ffffff;
`;

export const InfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-family: 'Euclid';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;

    color: #ffffff;

    flex: 1;
  }
`;

export const InfoAction = styled.div`
  display: flex;
  margin-left: auto;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  overflow: hidden;

  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;

  width: 100%;
  height: 350px;

  background: #ffffff;
  border-radius: 20px;
  transition: bottom 0.5s ease-out;

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    height: 300px;
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
    padding: 0 10px;
    margin-bottom: 15px;
  }
  @media (max-width: 320px) {
  }
`;

export const ResultActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalText = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;

  color: #000000;
  text-align: center;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
`;

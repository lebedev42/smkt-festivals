import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Container = styled.div<{ type: string; height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 41px;
  overflow: hidden;

  width: 100%;
  height: ${(props) => props.height}px;

  background-image: ${(props) =>
    props.type === 'festival' ? 'url(/festivalsBg.svg)' : 'url(/trackBg.svg)'};
`;

export const RulesBackdrop = styled.div`
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
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const RulesLink = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 27.2564px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Rules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  position: absolute;
  left: 0;
  opacity: 0;
  bottom: -500px;

  width: 100%;
  height: 272px;

  background: #ffffff;
  border-radius: 41px;
  transition: all 0.2s ease-out;

  &.open {
    bottom: -1px;
    opacity: 1;
    transition: all 0.2s ease-out;
  }
`;

export const RulesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 39px 38px;

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 46px;
  color: #171717;
`;

export const RulesText = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: #171717;

  margin-bottom: 32px;

  p {
    margin: 0;
    padding: 0;
  }
`;

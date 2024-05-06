import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 475px) {
    gap: 20px;
  }
  @media (max-width: 320px) {
    gap: 15px;
  }
`;

export const Container = styled.div<{ type: string; height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background-position: center;
  background-repeat: no-repeat;

  border-radius: 40px;

  width: 100%;
  /* height: ${(props) => props.height}px; */

  height: 85vh;
  background-size: cover;
  /* background-size: contain; */

  background-image: ${(props) =>
    props.type === 'festival' ? 'url(/festivalBg.png)' : 'url(/trackBg.svg)'};

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    border-radius: 30px;
  }
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

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    border-radius: 30px 30px 0 0;
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const RulesLink = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  text-align: center;

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 27px;

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

  @media (max-width: 475px) {
    font-size: 22px;
  }
  @media (max-width: 380px) {
    font-size: 18px;
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
  border-radius: 40px;
  transition: all 0.2s ease-out;

  &.open {
    bottom: -1px;
    opacity: 1;
    transition: all 0.2s ease-out;
  }

  @media (max-width: 475px) {
    border-radius: 40px;
    height: 380px;
  }
  @media (max-width: 380px) {
    height: 340px;
    border-radius: 30px 30px 0 0;
  }
  @media (max-width: 320px) {
    height: 280px;
  }
`;

export const RulesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 38px;

  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  color: #171717;

  @media (max-width: 475px) {
    font-size: 30px;
    margin: 20px;
  }
  @media (max-width: 380px) {
    font-size: 22px;
  }
  @media (max-width: 320px) {
    margin: 15px;
  }
`;

export const RulesText = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  color: #171717;

  p {
    margin: 0;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(0.9);
  }

  @media (max-width: 475px) {
    font-size: 18px;
    padding: 0 24px;
  }
  @media (max-width: 380px) {
    font-size: 15px;
    padding: 0 15px;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

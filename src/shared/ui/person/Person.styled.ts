import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6px;
`;

export const Avatar = styled.div`
  width: 54px;
  height: 54px;

  overflow: hidden;

  padding: 10px 0 0 0;

  border-radius: 50%;
  border: 2px solid #fff;
  background-color: #fff;

  &.selected {
    border: 2px solid #ff335f;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Name = styled.div`
  font-family: 'Euclid';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

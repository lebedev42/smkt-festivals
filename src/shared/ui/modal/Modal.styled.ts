import styled from 'styled-components';
import { Modal as BaseModal } from '@mui/base/Modal';

export const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  background: linear-gradient(
      180.03deg,
      rgba(255, 255, 255, 0.4) 0.02%,
      rgba(255, 75, 114, 0.4) 99.98%
    ),
    #eede9d;

  width: 100%;
  height: 100%;
  opacity: 0.5;

  @media (max-width: 475px) {
    border-radius: 40px;
  }
  @media (max-width: 380px) {
    border-radius: 30px 30px 0 0;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 8px;

  width: 300px;

  background: #fff;
  border-radius: 12px;
  outline: none;
`;

export const Content = styled.div`
  width: 100%;
`;

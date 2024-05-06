import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import * as Styled from './Modal.styled';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = useCallback(() => setIsVisible(true), []);
  const hideModal = useCallback(() => setIsVisible(false), []);

  return {
    isVisible,
    showModal,
    hideModal,
  };
};

type ModalProps = {
  isVisible: boolean;
  hideModal: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const { isVisible, hideModal, children } = props;

  return (
    <Styled.Modal
      open={isVisible}
      onClose={hideModal}
      // slots={{ backdrop: Backdrop }}
    >
      <Styled.Body>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Body>
    </Styled.Modal>
  );
};

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;

  return (
    <Styled.Backdrop
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

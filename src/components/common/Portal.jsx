import React from "react";
import { createPortal } from "react-dom";
import useOutsideClick from "../../hooks/useOutsideClick";
import styled from "styled-components";

const OverLay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  background: rgba(1, 1, 1, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  max-height: 80vh;
  max-width: 80vw;
  padding: 20px;
  background-color: white;
  z-index: 3;
  overflow: scroll;
  border-radius: 16px;
`;

const Modal = ({ onClose, children }) => {
  const [ref] = useOutsideClick(onClose);
  const node = document.getElementById("portal-root");
  const Element = (
    <OverLay>
      <Content ref={ref}>
        {children}
      </Content>
    </OverLay>
  );
  return createPortal(Element, node);
};

export default Modal;

import React from 'react';
import styled from 'styled-components';
import HtmlContent from './HtmlContent';
import Portal from './Portal';
import { FlexColumn } from './styled';

const Title = styled.div`
  font-size: 20px;
  color: rgba(23, 78, 153);
  font-weight: 600;
`;

const Modal = ({
  onClose,
  title,
  content
}) => {
  return <Portal onClose={onClose}>
    <FlexColumn>
      {title && <Title>{title}</Title>}
      <HtmlContent html={content} />
    </FlexColumn>
  </Portal>
};

export default Modal;
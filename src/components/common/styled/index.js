import styled from "styled-components";
import { BUTTON_TYPE, BUTTON_SIZE } from "../../../constant";

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  margin: 4px;
  height: fit-content;
  width: fit-content;
  padding: ${({type}) => type === BUTTON_TYPE.SECONDARY ? '0px':'6px 12px'};
  font-size: ${({type}) => type === BUTTON_TYPE.SECONDARY ? '12px':'14px'};
  background: ${({ type }) => type === BUTTON_TYPE.PRIMARY ? 'rgb(23, 78, 153)' : 'none'};
  color: ${({ type }) => type === BUTTON_TYPE.PRIMARY ? 'white': 'rgb(23, 78, 153)'};

  ${({ size, type }) => BUTTON_SIZE.LARGE === size && `
    padding: ${type === BUTTON_TYPE.SECONDARY ? '0px': '10px 20px'};
    font-size: 16px;
  `};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const LoaderBox = styled.div`
  background: #e9e9e9;
  ${({ height, width }) => `
    height: ${height};
    width: ${width};
  `}
`
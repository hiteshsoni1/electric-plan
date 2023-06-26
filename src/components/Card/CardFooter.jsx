import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/styled';
import {
  BUTTON_SIZE,
  BUTTON_TYPE,
  GET_THIS_PLAN,
  PAYMENT_OPTIONS,
  TERM_AND_CONDITION,
  VIEW_TERM_AND_CONDITION
} from '../../constant';
import { Flex } from '../common/styled';

const Wrapper = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f1f1f1;
  padding: 20px;
  margin-top: 20px;
  @media (max-width: 950px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Content = styled(Flex)`
  flex-direction: column;
  align-items: start;
  @media (max-width: 950px) {
    align-items: center;

  }
`;

const PaymentOption = styled.div`
  text-align: center;
  font-size: 14px;
  text-align: center;
  margin: 0px;
  margin: 4px;
  margin-bottom: 10px;
  p {
    margin: 0px;
  }
`;

const CardFooter = ({handleModal,planTC, paymentOptions,termCondition }) => {
  return <Wrapper>
    <Button
      type={BUTTON_TYPE.PRIMARY}
      size={BUTTON_SIZE.LARGE}
      onClick={() => handleModal(planTC)}
    >{GET_THIS_PLAN}</Button>
    <Content>
      <PaymentOption><strong>{PAYMENT_OPTIONS}:</strong> {paymentOptions}</PaymentOption>
      <Button
        type={BUTTON_TYPE.PRIMARY}
        onClick={() => { handleModal(termCondition, TERM_AND_CONDITION)}}
      >
        {VIEW_TERM_AND_CONDITION}
      </Button>
    </Content>
  </Wrapper>
}

export default CardFooter;
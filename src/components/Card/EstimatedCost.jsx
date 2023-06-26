import React from "react";
import styled from "styled-components";
import { ESTIMATED_COST } from "../../constant";
import { FlexColumn } from "../common/styled";

const Cost = styled(FlexColumn)`
  background: rgb(23, 78, 153, 0.2);
  align-items: start;
  height: fit-content;
  margin: 16px;
  border-radius: 4px;
  overflow: hidden;
`;

const Title = styled.div`
  background: rgb(23, 78, 153);
  color: white;
  padding: 4px 16px;
  padding-right: 60px;
`;

const Info = styled(FlexColumn)`
  padding: 8px 16px 20px;
  align-items: start;
`

const Duration = styled.span`
  font-size: ${({ type }) => type === 'large' ? '12px' : '8px'};
  color: gray;
`;
const Price = styled.span`
  font-size: ${({ type }) => type === 'large' ? '20px' : '14px'};
  color: rgb(23, 78, 153);
  margin-bottom: 4px;
`;

const EstimatedCost = ({
  monthlyBillAmount,
  yearlyBillAmount
}) => {
  return (
    <Cost>
      <Title>{ESTIMATED_COST}</Title>
      <Info>
        <Price type='large'>
          {`$${yearlyBillAmount}`}<Duration type='large'>/yr</Duration>
        </Price>
        <Price>
          {`$${monthlyBillAmount}`}<Duration>/m</Duration>
        </Price>
      </Info>
    </Cost>
  );
};

export default EstimatedCost;

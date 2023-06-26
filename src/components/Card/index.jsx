import React from "react";
import Provider from './Provider'
import styled from 'styled-components';
import EstimatedCost from "./EstimatedCost";
import KeyDetails from "./KeyDetails";
import Tags from "./Tags";
import CardFooter from "./CardFooter";
import { FEATURES, PLAN_DETAILS, WHY_US } from "../../constant";
import { Flex } from "../common/styled";

const Containter = styled.div`
  position: relative;
  border: 1px solid lightgray;
  margin-bottom: 32px;
  background: #f9f9f9;
`;

const Info = styled(Flex)`
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  padding-bottom: 0px;
  @media (max-width: 950px) {
   justify-content: center;
   flex-direction: column;
 }
`;

const Card = ({
  planName,
  contractLength,
  provider,
  features,
  termCondition,
  planDocument,
  benefit,
  exitFee,
  dmoPercentage,
  dmoContent,
  planReference,
  paymentOptions,
  monthlyBillAmount,
  yearlyBillAmount,
  tags,
  planTC,
  handleModal
}) => {
  return (
    <Containter>
      <Tags tags={tags} />
      <Info>
        <Provider
          {...provider}
          planName={planName}
          handleModal={() => handleModal(provider.whyUs, WHY_US)}
        />
        <KeyDetails
          planName={planName}
          exitFee={exitFee}
          planDocument={planDocument}
          contractLength={contractLength}
          benefit={benefit}
          dmoPercentage={dmoPercentage}
          planReference={planReference}
          onClick={() => handleModal(dmoContent, PLAN_DETAILS)}
          onFeatureClick={() => handleModal(features, FEATURES)}
      />
        
        <EstimatedCost
          monthlyBillAmount={monthlyBillAmount}
          yearlyBillAmount={yearlyBillAmount}

        />
      </Info>
      <CardFooter
        handleModal={handleModal}
        planTC={planTC}
        paymentOptions={paymentOptions}
        termCondition={termCondition}
      />
    </Containter>
  );
};

export default Card;

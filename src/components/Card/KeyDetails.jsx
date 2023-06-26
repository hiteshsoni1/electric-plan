import React from 'react';
import styled from 'styled-components';
import HtmlContent from '../common/HtmlContent';
import { Button } from '../common/styled';
import { BUTTON_TYPE, FEATURES, MORE_INFO, PLAN_NAME, VIEW_DETAILS } from '../../constant';
import CheckMark from '../../Icons/CheckMark';
import { FlexColumn } from '../common/styled';
import { Flex } from '../common/styled';

const Container = styled(FlexColumn)`
  margin-bottom: 20px;
`;

const Plan = styled(Flex)`
  flex-wrap: wrap;
  text-align: center;
  max-width: 500px;
  font-size: 16px;
  margin-bottom: 20px;
`
const Points = styled(Flex)`
  max-width: 500px;
  flex-wrap: wrap;
`;

const Point = styled.span`
  margin: 2px;
  margin-right: 10px;
  background: none;
  padding: 4px;
  border-radius: 4px;
  font-size: 14px;
  p {
    margin: 0px;
  }
`;

const Detail = styled.a`
  text-decoration: none;
  color: rgb(23, 78, 153);
  margin-left: 10px;
  font-size: 12px;
`

const Higlight = styled.div`
  background: #f1f1f1;
  padding: 10px 16px;
`;

const Span = styled.span`
  margin-right: 10px;
`;

const KeyDetails = ({
  planName,
  exitFee,
  planDocument,
  contractLength,
  benefit,
  dmoPercentage,
  planReference,
  onClick,
  onFeatureClick
}) => {
  return <Container>
    <Plan>
      {`${PLAN_NAME}: ${planName}`}
      <Detail href={planDocument} download='details'>{VIEW_DETAILS}</Detail>
    </Plan>
    <Higlight>
      <div>{dmoPercentage}</div>
      <div>
        <Span>
          {planReference}
        </Span>
        <Button type={BUTTON_TYPE.SECONDARY} onClick={onClick}>{MORE_INFO}</Button>
      </div>
    </Higlight>
    <Points>
      <Flex><CheckMark /><Point><HtmlContent html={exitFee} /></Point></Flex>
      <Flex><CheckMark /><Point> {contractLength}</Point></Flex>
      <Flex><CheckMark /><Point><HtmlContent html={benefit} /></Point></Flex>
    </Points>
    <Button type={BUTTON_TYPE.PRIMARY} onClick={() => onFeatureClick()}>{FEATURES}</Button>
  </Container>
}

export default KeyDetails;

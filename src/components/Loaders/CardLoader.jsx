import React from "react";
import styled from "styled-components";
import { Flex, FlexColumn } from "../common/styled";
import { LoaderBox } from "../common/styled";

const Container = styled.div`
  background: #f9f9f9;
  border: 1px solid lightGray;
  margin-bottom: 32px;
`;

const Wrapper = styled(Flex)`
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 950px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Footer = styled(Flex)`
  background: #f1f1f1;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 20px;
  @media (max-width: 950px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Text = styled(LoaderBox)`
  margin-bottom: 10px;
`;

const MainContent = styled(LoaderBox)`
  margin-bottom: 20px;
`;

const Content = styled(FlexColumn)`
  align-items: start;
  @media (max-width: 950px) {
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled(LoaderBox)`
  margin: 4px;
`;

const CardLoader = () => {
  return (
    <Container>
      <Wrapper>
        <MainContent height="140px" width="150px" />
        <MainContent height="165px" width="280px" />
        <MainContent height="100px" width="180px" />
      </Wrapper>
      <Footer>
        <Button height="38px" width="131px" />
        <Content>
          <Text height="18px" width="300px" />
          <LoaderBox height="28px" width="150px" />
        </Content>
      </Footer>
    </Container>
  );
};

export default CardLoader;
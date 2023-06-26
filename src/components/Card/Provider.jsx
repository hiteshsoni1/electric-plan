import React from "react";
import styled from "styled-components";
import { Button } from "../common/styled";
import { BUTTON_TYPE, WHY_US } from "../../constant";
import { FlexColumn } from "../common/styled";

const Containter = styled(FlexColumn)`
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 140px;
`;

const Desc = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
`;

const Provider = ({ name, logo, phone, handleModal }) => {
  return (
    <Containter>
      <Logo src={logo} alt="logo" />
      <Desc>{name}</Desc>
      <Desc>Phone: {phone}</Desc>
      <Button 
        type={BUTTON_TYPE.PRIMARY}
        onClick={() => handleModal()}>
        {WHY_US}
      </Button>
    </Containter>
  );
};

export default Provider;

import React from 'react';
import CardLoader from './CardLoader';
import styled from 'styled-components';
import { LoaderBox } from '../common/styled';

const Container = styled.div`
  padding: 20px;
`
const Box = styled(LoaderBox)`
  margin-bottom: 32px;
`;

const ListLoader = () => {
  return <Container>
    <Box height='20px' width='138px'/>
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </Container>
}
export default ListLoader;
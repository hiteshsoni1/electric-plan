import React from 'react';
import styled from 'styled-components';
import { Flex } from '../common/styled';
const List = styled(Flex)`
  position: absolute;
  transform: translatey(-50%);
  left: 20px;
  top: 0;
`;

const Tag = styled.div`
  margin: 6px;
  border: 1px solid lightgray;
  text-transform: capitalize;
  padding: 4px 12px;
  z-index: 1;
  background-color: #FFFFFF;
  border-radius: 4px;
`;

const Tags = ({tags}) => {
  return <List>{
    tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
  }
</List>
}

export default Tags;
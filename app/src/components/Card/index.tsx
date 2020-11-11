import React from 'react';

import { Container, Content, Title, SubTitle } from './styles';

import IconButton from '../IconButton';

const Card: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>Team #4</Title>
        <SubTitle>People (4)</SubTitle>
      </Content>
      <IconButton iconName="arrow-right" iconSize={20} />
    </Container>
  );
};

export default Card;

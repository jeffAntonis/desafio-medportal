import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Header, Title } from './styles';

import IconButton from '../../components/IconButton';
import Card from '../../components/Card';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Grupos</Title>
        <IconButton iconName="plus" iconSize={25} />
      </Header>

      <Content data={[1, 2]} renderItem={({ item, index }) => <Card />} />
    </Container>
  );
};

export default Home;

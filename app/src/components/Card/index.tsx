import React from 'react';

import { Container, Content, Title, SubTitle } from './styles';

import IconButton from '../IconButton';

const Card: React.FC<{
  data: any;
  navigation: any;
}> = ({ data, navigation }) => {
  return (
    <Container>
      <Content>
        <Title>{data.name}</Title>
        <SubTitle>Pessoas {`(${data.users.length})`}</SubTitle>
      </Content>
      <IconButton
        iconName="arrow-right"
        iconSize={20}
        onClick={() =>
          navigation.navigate('groupDetails', {
            cardId: data.id,
          })
        }
      />
    </Container>
  );
};

export default Card;

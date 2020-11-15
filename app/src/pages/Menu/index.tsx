import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  ItemRow,
  ItemText,
  Button,
  TextButton,
} from './styles';
import IconButton from '../../components/IconButton';
import { ButtonText } from '../Home/styles';

import api from '../../services/api';

const Menu: React.FC = (props: any) => {
  const { groupId } = props.route.params;
  const [participate, setParticipate] = useState(false);

  useEffect(() => {
    verifyParticipate();
  }, []);

  const verifyParticipate = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const tokenObj = JSON.parse(atob(access_token.split('.')[1]));

    try {
      const { data } = await api.get(`/groups/${groupId}`);
      data.users.map((user) => {
        if (user.id === tokenObj.id) {
          setParticipate(true);
        }
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const participateGroup = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const tokenObj = JSON.parse(atob(access_token.split('.')[1]));

    try {
      await api.post('/groups/relation-user', {
        userId: tokenObj.id,
        groupId,
      });

      Alert.alert('', 'Agora você é um integrante desse grupo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>O que você deseja fazer?</Title>

      <ItemRow
        onPress={() =>
          props.navigation.navigate('sendMessage', {
            groupId,
          })
        }
      >
        <IconButton iconName="send" iconSize={25} />
        <ItemText>Enviar Mensagem</ItemText>
        <Icon name="chevron-right" size={15} />
      </ItemRow>

      {!participate && (
        <ItemRow onPress={() => participateGroup()}>
          <IconButton iconName="thumbs-up" iconSize={25} />
          <ItemText>Participar</ItemText>
          <Icon name="chevron-right" size={15} />
        </ItemRow>
      )}

      <Button onPress={() => props.navigation.goBack()}>
        <ButtonText>Fechar X</ButtonText>
      </Button>
    </Container>
  );
};

export default Menu;

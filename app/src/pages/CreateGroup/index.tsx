import React, { useState } from 'react';
import { Alert } from 'react-native';

import {
  Container,
  Title,
  InputContainer,
  InputContent,
  Button,
  ButtonText,
  ButtonEnd,
  TextButton,
} from './styles';

import api from '../../services/api';

const CreateGroup: React.FC = (props: any) => {
  const [groupName, setGroupName] = useState('');

  const createGroup = async () => {
    if (!groupName) {
      Alert.alert('', 'Preencha o nome do grupo para continuar');
      return;
    }

    try {
      await api.post('/groups', {
        name: groupName,
      });
      setGroupName('');
      Alert.alert('', 'Grupo cadastrado com sucesso');
      props.navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('', 'Tivemos um problema, tente novamente mais tarde');
    }
  };
  return (
    <Container>
      <Title>Criar Grupo</Title>
      <InputContainer>
        <InputContent
          placeholder="Nome do Grupo"
          value={groupName}
          onChangeText={(text) => setGroupName(text)}
        />
      </InputContainer>

      <Button onPress={createGroup}>
        <ButtonText>Criar</ButtonText>
      </Button>

      <ButtonEnd onPress={() => props.navigation.goBack()}>
        <TextButton>Fechar X</TextButton>
      </ButtonEnd>
    </Container>
  );
};

export default CreateGroup;

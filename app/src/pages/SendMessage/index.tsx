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

const SendMessage: React.FC = (props: any) => {
  const { groupId } = props.route.params;
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    if (!message) {
      Alert.alert('', 'Preencha a messagem para continuar');
      return;
    }

    try {
      await api.post('/onesignal/send-message', {
        message,
        groupId,
      });
      setMessage('');
      Alert.alert('', 'Mensagem enviada com sucesso');
      props.navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('', 'Tivemos um problema, tente novamente mais tarde');
    }
  };
  return (
    <Container>
      <Title>Enviar Mensagem</Title>
      <InputContainer>
        <InputContent
          placeholder="Mensagem"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
      </InputContainer>

      <Button onPress={sendMessage}>
        <ButtonText>Enviar</ButtonText>
      </Button>

      <ButtonEnd onPress={() => props.navigation.goBack()}>
        <TextButton>Fechar X</TextButton>
      </ButtonEnd>
    </Container>
  );
};

export default SendMessage;

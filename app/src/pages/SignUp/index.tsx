import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import {
  Container,
  Image,
  ImageBackground,
  Content,
  Title,
  SubTitle,
  Form,
  InputContainer,
  InputContent,
  Button,
} from './styles';

import bgw from '../../assets/bg_04.jpg';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';

import api from '../../services/api';

const SigUp: React.FC = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sigUp = async () => {
    if (!email || !password || !name) {
      Alert.alert('', 'Informe seus dados de acesso para continuar');
      return;
    }

    try {
      await api.post('/auth/register', {
        name,
        email,
        password,
      });
      Alert.alert('', 'Cadastro realizado com sucesso');

      props.navigation.goBack();
    } catch (error) {
      console.log(error.response);
      Alert.alert('', 'Tivemos um problema, tente novamente');
    }
  };

  return (
    <Container>
      <Image source={logoWhite} />
      <Content>
        <Title>Cadastro</Title>

        <SubTitle>Preencha os dados abaixo</SubTitle>

        <Form>
          <InputContainer>
            <InputContent
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </InputContainer>

          <InputContainer>
            <InputContent
              keyboardType="email-address"
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </InputContainer>

          <InputContainer>
            <InputContent
              keyboardType="number-pad"
              secureTextEntry
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </InputContainer>

          <Button onPress={sigUp}>
            <SubTitle style={{ marginTop: 0 }} color="#FFF">
              Cadastrar
            </SubTitle>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SigUp;

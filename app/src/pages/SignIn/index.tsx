import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ImageBackground,
  Content,
  Title,
  SubTitle,
  Form,
  InputContainer,
  InputContent,
  Button,
} from './styles';

import bgw from '../../assets/bgw.jpg';

import api from '../../services/api';

const SignIn: React.FC = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sigIn = async () => {
    if (!email || !password) {
      Alert.alert('', 'Informe seus dados de acesso para continuar');
      return;
    }

    try {
      const { data } = await api.post('/auth/login', {
        email,
        password,
      });

      console.log(data);
      await AsyncStorage.setItem('@storage_Key', data.access_token);
      props.navigation.navigate('stackApp');
    } catch (error) {
      console.log(error.response);
      Alert.alert('', 'Verifique suas credenciais e tente novamente');
    }
  };

  return (
    <Container>
      <Title fontSize={35} color="#FFF">
        Desafio MedPortal
      </Title>
      <Content>
        <Title>Bem vindo(a)!</Title>

        <SubTitle>Por favor entre</SubTitle>

        <Form>
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

          <Button onPress={sigIn}>
            <SubTitle style={{ marginTop: 0 }} color="#FFF">
              Entrar
            </SubTitle>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;

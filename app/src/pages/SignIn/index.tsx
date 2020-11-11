import React, { useState } from 'react';
import { Alert } from 'react-native';

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

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sigIn = async () => {
    if (!email || !password) {
      Alert.alert('', 'Informe seus dados de acesso para continuar');
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

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

      const { access_token } = data;

      const tokenObj = JSON.parse(atob(access_token.split('.')[1]));

      const userId = await AsyncStorage.getItem('userId');

      console.log(userId, tokenObj?.id);

      await api.post('users/change-app-id', {
        userId: tokenObj?.id,
        appId: userId,
      });

      console.log(data);
      await AsyncStorage.setItem('access_token', access_token);
      // props.navigation.navigate('stackApp');
      await props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'stackApp' }],
        })
      );
    } catch (error) {
      console.log(error.response);
      Alert.alert('', 'Verifique suas credenciais e tente novamente');
    }
  };

  return (
    <Container>
      <Image source={logoWhite} />
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

          <Button onPress={() => props.navigation.navigate('signUp')}>
            <SubTitle style={{ marginTop: 0 }} color="#FFF">
              Cadastrar
            </SubTitle>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;

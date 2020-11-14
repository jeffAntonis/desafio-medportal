import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  Content,
  ContentUsers,
  Title,
  SubTitle,
  ImageContent,
  Image,
  RowUser,
  Description,
  ModalContainer,
  ModalContent,
  InputContainer,
  InputContent,
  Button,
  ButtonText,
} from './styles';

import IconButton from '../../components/IconButton';
import groupImage from '../../assets/group.png';

import api from '../../services/api';

const GroupDetails: React.FC = (props: any) => {
  const { cardId } = props.route.params;
  const [group, setGroup] = useState<{ name: string; users: any }>({
    name: '',
    users: [],
  });
  const [loading, setLoading] = useState(false);
  const [participate, setParticipate] = useState(false);
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    verifyParticipate();
    getGroup();
  }, []);

  const getGroup = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/groups/${cardId}`);
      setGroup(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyParticipate = async () => {
    const access_token = await AsyncStorage.getItem('access_token');
    const tokenObj = JSON.parse(atob(access_token.split('.')[1]));

    try {
      const { data } = await api.get(`/groups/${cardId}`);
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
        groupId: cardId,
      });

      Alert.alert('', 'Agora você é um integrante desse grupo');

      getGroup();
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    try {
      await api.post('/onesignal/send-message', {
        message,
        groupId: cardId,
      });

      Alert.alert('', 'Mensagem enviada com sucesso');

      getGroup();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <IconButton
          iconName="arrow-left"
          iconSize={25}
          onClick={() => props.navigation.goBack()}
        />
        <IconButton
          iconName="send"
          iconSize={25}
          onClick={() => setModalVisible(true)}
        />
      </Header>
      {loading && <ActivityIndicator size="small" color="#000" />}
      {!loading && group.name !== '' && (
        <Content>
          <ImageContent>
            <Image
              resizeMethod="auto"
              resizeMode="contain"
              source={groupImage}
            />
          </ImageContent>

          <Title>{group.name}</Title>
          <SubTitle>
            {group.users.length} Pessoa{group.users.length > 1 ? 's' : ''}
          </SubTitle>

          <ContentUsers
            data={group.users}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <RowUser>
                <SubTitle>{item.name}</SubTitle>
                <Description>{item.email}</Description>
              </RowUser>
            )}
          />

          {!participate && (
            <Button disabled={participate} onPress={participateGroup}>
              <ButtonText>Participar</ButtonText>
            </Button>
          )}
        </Content>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <Title>Criar Grupo</Title>
            <InputContainer>
              <InputContent
                placeholder="Mensagem"
                value={message}
                onChangeText={(text) => setMessage(text)}
              />
            </InputContainer>

            <Button onPress={sendMessage}>
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default GroupDetails;

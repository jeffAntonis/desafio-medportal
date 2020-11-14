import React, { useState, useEffect } from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import {
  Container,
  Content,
  Header,
  Title,
  ModalContainer,
  ModalContent,
  InputContainer,
  InputContent,
  Button,
  ButtonText,
  ContentIcons,
} from './styles';

import IconButton from '../../components/IconButton';
import Card from '../../components/Card';

import api from '../../services/api';

const Home: React.FC = (props: any) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/groups');
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const createGroup = async () => {
    try {
      await api.post('/groups', {
        name: groupName,
      });
      setGroupName('');
      setModalVisible(false);
      getGroups();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Grupos</Title>
        <ContentIcons>
          <IconButton
            iconName="plus"
            iconSize={25}
            onClick={() => setModalVisible(true)}
          />
          <IconButton
            iconName="log-out"
            iconSize={25}
            onClick={async () => {
              await AsyncStorage.removeItem('access_token');
              await props.navigation.dispatch(
                CommonActions.reset({
                  index: 1,
                  routes: [{ name: 'stackAuth' }],
                })
              );
            }}
          />
        </ContentIcons>
      </Header>

      {loading && <ActivityIndicator size="small" color="#000" />}

      <Content
        data={groups}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <Card navigation={props.navigation} data={item} />
        )}
      />
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
                placeholder="Nome do Grupo"
                value={groupName}
                onChangeText={(text) => setGroupName(text)}
              />
            </InputContainer>

            <Button onPress={createGroup}>
              <ButtonText>Criar</ButtonText>
            </Button>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Home;

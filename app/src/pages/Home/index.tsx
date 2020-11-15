import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import {
  Container,
  Content,
  Header,
  Title,
  ButtonText,
  ContentIcons,
} from './styles';

import IconButton from '../../components/IconButton';
import Card from '../../components/Card';

import api from '../../services/api';

const Home: React.FC = (props: any) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <Container>
      <Header>
        <Title>Grupos</Title>
        <ContentIcons>
          <IconButton
            iconName="rotate-cw"
            iconSize={25}
            onClick={() => getGroups()}
          />
          <IconButton
            iconName="plus"
            iconSize={25}
            onClick={() => props.navigation.navigate('createGroup')}
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

      {!loading && groups.length === 0 && (
        <ButtonText>Nenhum grupo encontrado</ButtonText>
      )}

      <Content
        data={groups}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <Card navigation={props.navigation} data={item} />
        )}
      />
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

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
} from './styles';

import IconButton from '../../components/IconButton';
import FloatingButton from '../../components/FloatingButton';
import groupImage from '../../assets/group.png';

import api from '../../services/api';

const GroupDetails: React.FC = (props: any) => {
  const { cardId } = props.route.params;
  const [group, setGroup] = useState<{ name: string; users: any }>({
    name: '',
    users: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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

  return (
    <>
      <Container>
        <Header>
          <IconButton
            iconName="arrow-left"
            iconSize={25}
            onClick={() => props.navigation.goBack()}
          />
          <ImageContent>
            <Image
              resizeMethod="auto"
              resizeMode="contain"
              source={groupImage}
            />
          </ImageContent>

          <IconButton
            iconName="rotate-cw"
            iconSize={25}
            onClick={() => getGroup()}
          />
        </Header>
        {loading && <ActivityIndicator size="small" color="#000" />}
        {!loading && group.name !== '' && (
          <Content>
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
          </Content>
        )}
      </Container>
      <FloatingButton
        iconName="maximize-2"
        iconSize={25}
        onClick={() =>
          props.navigation.navigate('menu', {
            groupId: cardId,
          })
        }
      />
    </>
  );
};

export default GroupDetails;

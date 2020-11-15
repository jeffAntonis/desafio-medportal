import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2b398f;
`;

export const Header = styled.View`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Content = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  padding: 10px;
  flex: 1;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

export const InputContainer = styled.View`
  width: 90%;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-width: 2px;
  border-color: #f3f3f3;
`;

export const InputContent = styled.TextInput``;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  width: 90%;
  height: 15%;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 2px;
  background-color: #202020;
  justify-content: center;
  align-items: center;
`;

export const ContentIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

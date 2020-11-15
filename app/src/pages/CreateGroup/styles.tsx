import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
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
  height: 8%;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 2px;
  border-color: #24b7fa;
  background-color: #24b7fa;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const ButtonEnd = styled.TouchableOpacity`
  background-color: #2b398f;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 20px;
  bottom: 30px;
  right: 30px;
  position: absolute;
`;

export const TextButton = styled.Text`
  color: #fff;
`;

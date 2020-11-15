import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ItemRow = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
`;

export const ItemText = styled.Text`
  font-size: 23px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #2b398f;
  padding: 12px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 20px;
  bottom: 30px;
  right: 30px;
  position: absolute;
`;

export const TextButton = styled.Text``;

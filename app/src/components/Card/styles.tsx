import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 15px;
  elevation: 5;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #5d5d5d;
`;

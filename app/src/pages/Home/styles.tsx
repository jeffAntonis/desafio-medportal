import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f2f4f9;
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
`;

export const Content = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`
  padding: 10px;
  flex: 1;
`;

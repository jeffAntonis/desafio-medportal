import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
  background-color: #202020;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  background-color: #fff;
  top: 200px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  elevation: 5;
`;

export const Title = styled.Text`
  font-size: ${(props) => props.fontSize || '20'}px;
  color: ${(props) => props.color || '#000'};
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.color || '#000'};
  margin-top: 30px;
`;

export const Form = styled.View`
  padding: 10px;
  padding-top: 50px;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 90%;
  background-color: #f3f3f3;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
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

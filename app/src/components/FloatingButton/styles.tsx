import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  right: 30px;
  bottom: 30px;
  z-index: 2;
  border-radius: 15px;
  background-color: #2b398f;
  shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 2;
  }
  shadow-opacity: 0.25;
  shadow-radius: 3.84;
  elevation: 5;
`;

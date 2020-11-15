import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface ButtonInterface {
  onClick?: any;
  loading?: boolean;
  iconName?: string;
  iconSize?: number;
}

const FloatingButton: React.FC<ButtonInterface> = ({
  onClick,
  loading,
  iconName = '',
  iconSize = '',
}) => {
  return (
    <Container onPress={onClick}>
      <Icon name={iconName} size={iconSize} color="#FFF" />
    </Container>
  );
};

export default FloatingButton;

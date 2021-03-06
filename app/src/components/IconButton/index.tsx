import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container } from './styles';

interface ButtonInterface {
  onClick?: any;
  loading?: boolean;
  iconName?: string;
  iconSize?: number;
}

const IconButton: React.FC<ButtonInterface> = ({
  onClick = null,
  loading = false,
  iconName = '',
  iconSize = '',
}: ButtonInterface) => {
  return (
    <Container onPress={onClick}>
      <Icon name={iconName} size={iconSize} color="#FFF" />
    </Container>
  );
};

export default IconButton;

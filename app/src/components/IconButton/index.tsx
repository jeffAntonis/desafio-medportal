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
    <Container>
      <Icon name={iconName} size={iconSize} />
    </Container>
  );
};

export default IconButton;

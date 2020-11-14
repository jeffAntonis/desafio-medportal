import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

const Splash: React.FC = (props: any) => {
  const initAuthToken = async () => {
    const authData = await AsyncStorage.getItem('access_token');

    if (authData !== null) {
      console.log(authData);

      props.navigation.navigate('stackApp');
    } else {
      props.navigation.navigate('stackAuth');
    }
  };

  useEffect(() => {
    initAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View />;
};

export default Splash;

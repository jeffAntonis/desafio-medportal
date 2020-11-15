import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';

const Splash: React.FC = (props: any) => {
  const initAuthToken = async () => {
    const authData = await AsyncStorage.getItem('access_token');

    if (authData !== null) {
      console.log(authData);

      await props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'stackApp' }],
        })
      );
    } else {
      await props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'stackAuth' }],
        })
      );
    }
  };

  useEffect(() => {
    initAuthToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <View />;
};

export default Splash;

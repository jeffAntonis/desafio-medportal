import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { isAfter } from 'date-fns';

const Splash: React.FC = (props: any) => {
  const initAuthToken = async () => {
    const access_token = await AsyncStorage.getItem('access_token');

    if (access_token !== null) {
      const tokenObj = JSON.parse(atob(access_token.split('.')[1]));

      //TOKEN EXP
      if (isAfter(new Date(), new Date(tokenObj.exp * 1000))) {
        await AsyncStorage.removeItem('access_token');
        await props.navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'stackAuth' }],
          })
        );
      }

      await props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'stackApp' }],
        })
      );
    } else {
      await AsyncStorage.removeItem('access_token');
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

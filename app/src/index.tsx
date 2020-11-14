import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OneSignal from 'react-native-onesignal';

import Splash from './pages/Splash';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import GroupDetails from './pages/GroupDetails';

import { decode, encode } from 'base-64';

declare const global: any;

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

const StackAuth = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="signIn" component={SignIn} />
    <Stack.Screen name="signUp" component={SignUp} />
  </Stack.Navigator>
);

const StackApp = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="groupDetails" component={GroupDetails} />
  </Stack.Navigator>
);

const onReceived = (notification: any) => {
  console.log('Notification received: ', notification);
};

const onOpened = (openResult: any) => {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
};

const onIds = async (device: any) => {
  console.log(device);
  await AsyncStorage.setItem('userId', device.userId);
};

const App = () => {
  useEffect(() => {
    OneSignal.init('230b5cf4-6dbc-4ab0-8b33-3cc56469976f');
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash" headerMode="none">
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="stackAuth" component={StackAuth} />
          <Stack.Screen name="stackApp" component={StackApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

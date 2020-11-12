import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OneSignal from 'react-native-onesignal';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

const Stack = createStackNavigator();

const StackAuth = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const StackApp = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
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

const App = () => {
  useEffect(() => {
    OneSignal.init('230b5cf4-6dbc-4ab0-8b33-3cc56469976f');
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#202020" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="stackApp" headerMode="none">
          <Stack.Screen name="stackAuth" component={StackAuth} />
          <Stack.Screen name="stackApp" component={StackApp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

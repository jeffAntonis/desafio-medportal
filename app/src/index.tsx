import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const App = () => {
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

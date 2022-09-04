import 'react-native-gesture-handler';
import React from 'react';
import Home from './src/containers/Home';
import Conference from './src/containers/Conference';
import Story from './src/containers/Story';
import Sessions from './src/containers/Sessions';
import Speakers from './src/containers/Speakers';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conference" component={Conference} />
        <Stack.Screen name="Story" component={Story} />
        <Stack.Screen name="Sessions" component={Sessions} />
        <Stack.Screen name="Speakers" component={Speakers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

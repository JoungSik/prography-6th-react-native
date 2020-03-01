import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/screens/HomeScreen';
import ToDoList from '~/screens/ToDoListScreen';
import Movie from "~/screens/MovieScreen";

const Stack = createStackNavigator();

export default Screen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

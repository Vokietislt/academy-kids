import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home.js'
import FlatListas from '../Screens/FlatListas'
import Images from '../Screens/Images.js';
import StatesPractice from '../Screens/statesPractise.js';
const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator  >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="flat" component={FlatListas} />
            <Stack.Screen name="image" component={Images} />
            <Stack.Screen name="states" component={StatesPractice} />
        </Stack.Navigator>
    </NavigationContainer >
  )
}
export default LoginStack;


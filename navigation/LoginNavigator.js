import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home.js'
import Images from '../Screens/Images'
const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator  >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="images" component={Images} />
        </Stack.Navigator>
    </NavigationContainer >
  )
}
export default LoginStack;


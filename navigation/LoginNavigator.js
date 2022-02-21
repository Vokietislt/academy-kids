import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/home.js'
const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator  >
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer >
  )
}
export default LoginStack;


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';


//screen options for removing header from top

export default function Navigation(){
    return(
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false}}>   
            <Stack.Screen  name="Home"  component={HomeScreen} />
            <Stack.Screen  name="Login"  component={LoginScreen} />
            <Stack.Screen  name="Register"  component={RegisterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}


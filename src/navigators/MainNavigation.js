import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Signin, Signup } from '../screens/Auth';
import CustomBottomTabNavigation from './CustomBottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "fade_from_bottom"
        }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={CustomBottomTabNavigation} />
        </Stack.Navigator>
    )
}
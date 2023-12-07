import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Signin, Signup } from '../screens/Auth';
import CustomBottomTabNavigation from './CustomBottomTabNavigation';
import AudioPlayer from '../screens/AudioPlayer';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator initialRouteName='Signin' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={CustomBottomTabNavigation} />
            <Stack.Screen name="Audio" component={AudioPlayer} options={{
                animation: 'fade_from_bottom'
            }} />
        </Stack.Navigator>
    )
} 
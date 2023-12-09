import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { Signin, Signup } from '../screens/Auth';
import CustomBottomTabNavigation from './CustomBottomTabNavigation';
import AudioPlayer from '../screens/AudioPlayer';
import { AuthContext } from '../context/AuthState';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Signin' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

const ScreenNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Main' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Main" component={CustomBottomTabNavigation} />
            <Stack.Screen name="Audio" component={AudioPlayer} options={{
                animation: 'fade_from_bottom'
            }} />
        </Stack.Navigator>
    )
}

export default function MainNavigation() {
    let auth = useContext(AuthContext);
    return auth.auth ? <ScreenNavigation /> : <AuthNavigation />;
}
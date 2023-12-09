import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigators/MainNavigation';
import AuthState from './src/context/AuthState';

function App() {
    return (
        <NavigationContainer>
            <AuthState>
                <MainNavigation />
            </AuthState>
        </NavigationContainer>
    );
}

export default App;
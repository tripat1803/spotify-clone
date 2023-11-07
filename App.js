import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigators/MainNavigation';

function App() {
    return(
        <NavigationContainer>
            <MainNavigation/>
        </NavigationContainer>
    );
}

export default App;
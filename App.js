import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/tabs';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor="#121212"/>
            <Navigation />
        </NavigationContainer>
    )
}

export default App;
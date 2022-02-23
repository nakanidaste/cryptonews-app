import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/tabs';
// import { DetailNews } from './src/screens';
// import { NewsList } from './src/components';

// const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'MainLayout'}>
                <Stack.Screen name="MainLayout" component={Tabs} />
                <Stack.Screen name="DetailNews" component={DetailNews} />
            </Stack.Navigator> */}
            <Navigation />
        </NavigationContainer>
    )
}

export default App;
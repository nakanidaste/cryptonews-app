import React, { useEffect, useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DetailNews, Login, SignUp, Profile } from "../screens"
import { AuthContext } from "../services/AuthProvider";
import Tabs from "./tabs"   
import auth from '@react-native-firebase/auth'

const Stack = createStackNavigator();

const Navigation = () => {

    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if(initializing) setInitializing(false)
    }

    useEffect(() => {
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subcriber
    }, [])

    if(initializing) return null

    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor="#121212"/>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'MainLayout'}>
                <Stack.Screen name="MainLayout" component={Tabs} />
                <Stack.Screen name="DetailNews" component={DetailNews} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
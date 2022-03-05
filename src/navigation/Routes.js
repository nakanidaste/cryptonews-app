import React, { useEffect, useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { DetailNews, Login, SignUp, Profile, OnboardingScreen } from "../screens"
import { AuthContext } from "../services/AuthProvider";
import Tabs from "./tabs"   
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const Navigation = () => {

    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true)
    const [isFirstLauch, setIsFirstLaunch] = useState(null)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if(initializing) setInitializing(false)
    }

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if(value === null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        })
    }, [])

    useEffect(() => {
        const subcriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subcriber
    }, [])

    if(initializing) return null

    if( isFirstLauch === null) {
        return null
    } else if( isFirstLauch === true) {
        return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor="#121212"/>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'Onboarding'}>
                <Stack.Screen name="MainLayout" component={Tabs} />
                <Stack.Screen name="DetailNews" component={DetailNews} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    } else {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor="#121212"/>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={'MainLayout'}>
                <Stack.Screen name="MainLayout" component={Tabs} />
                <Stack.Screen name="DetailNews" component={DetailNews} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
    }
}

export default Navigation;
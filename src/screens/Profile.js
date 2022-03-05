import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { Header } from '../components'
import { AuthContext } from '../services/AuthProvider'
import { firebase } from '@react-native-firebase/auth'

const Profile = ({ navigation }) => {

    const {user, logout, anonymous} = useContext(AuthContext)

    useEffect(() => {
        
    }, [user])

    if (!firebase.auth().currentUser.isAnonymous) {
        return (
            <View style={styles.containerProfile}>
                <Text style={styles.text}>{user.uid}</Text>
                <Text 
                    style={styles.text1} 
                    onPress={() => {
                        anonymous()
                        //logout()  
                    }}
                >
                Log Out
                </Text>
            </View>
        )
    } if(firebase.auth().currentUser.isAnonymous) {
        return (
            <View style={styles.container2}>
                <Header label="Profile"/>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.text1}>You are logged in anonymously,</Text>
                        <Text style={styles.text}>to access the App without Advertisement</Text>  
                        <Text style={styles.text}>please authorize first.</Text>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding')}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: COLORS.white}}>{user.uid}</Text>
                    </View>  
                </View>
            </View>
        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    containerProfile: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    content: {
        height: '55%',
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: "#020202",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
    },
    text1: {
        color: COLORS.white,
        ...FONTS.body4,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: '40%',
        borderWidth: 1,
        borderColor: COLORS.blue,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        color: COLORS.blue,
        ...FONTS.body4
    },
})